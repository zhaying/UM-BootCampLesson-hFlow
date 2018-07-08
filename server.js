//Enable use of environment variables in .env
const dotenv = require('dotenv');
dotenv.config();

//Import modules for use
const express      = require('express'),
      parser       = require('body-parser'),
      passport     = require('passport'),
      passportJWT  = require('passport-jwt'),
      JwtStrategy  = passportJWT.Strategy,
      ExtractJwt   = passportJWT.ExtractJwt,
      jwt          = require('jsonwebtoken');
      knex         = require('knex'),
      bookshelf    = require('bookshelf'),
      hashPassword = require('bookshelf-secure-password');

// Connect to DB
const knexDB = knex({ client: 'mysql', connection: {
          host: process.env.MYSQL_HOST,
          user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
       charset: process.env.MYSQL_CHAR }
});

// Create database and enable password encryption
const db = bookshelf(knexDB);
      db.plugin(hashPassword);

// Create Users model
const User = db.Model.extend({
  tableName: 'hflow_user',
  hasSecurePassword: true
});

// Instatiate express server
const app = new express();

// Enable use of authentication
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: process.env.JWT_SECRET
};

const strategy = new JwtStrategy(opts, (payload, next)=>{
  //Get one user from database
  User.forge({ id: payload.id }).fetch().then(results =>{
    next(null, results);
  });
});

passport.use(strategy);
app.use(passport.initialize());

// Parse the body
app.use(parser.urlencoded({
  extended: false
  })
);

app.use(parser.json());

// Homepage of api
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Register a new user
app.post('/register', (req, res) => {
  //Variables for easier readability
  let userEmail    = req.body.email,
      userPassword = req.body.password;

  // Check the required fields have been sent
  if(!userEmail || !userPassword){
    return res.status(401).json({data: {error: 'missing fields'}});
  }

  const user = new User({
       email: userEmail,
    password: userPassword
  });

  user.save().then( () => {res.send('ok'); });

});

// Verify user and send JWT
app.post('/authenticate',(req, res)=>{
  console.log("In /authenticate");
  console.log("body data",req.body);
  let userEmail    = req.body.email,
      userPassword = req.body.password;
  // Check the required fields have been sent
  if(!userEmail || !userPassword){
    console.log("In /authenticate 401");
    return res.status(401).json({data: {error: 'missing fields'}});
  }

  User.forge({email: userEmail}).fetch().then(result =>{
    if(!result) {
      return res.status(400).send({data: {error: 'bad request'}});
    }
    result.authenticate(userPassword).then(user =>{
      const payload    = {id: user.id},
            privateKey = process.env.JWT_SECRET,
            token      = jwt.sign(payload,privateKey);
      res.send(token);
    });
  });
});

// Test protected Route
app.get('/protected', passport.authenticate('jwt', {session: false }), (req, res) => {
    res.send('revealed secret');
});

// Setup express config variables
const PORT = process.env.PORT || 5000;

// Start server on specific PORT
app.listen(PORT);