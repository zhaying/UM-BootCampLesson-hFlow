//Enable use of environment variables in .env
const dotenv = require('dotenv');
dotenv.config();

//Import modules for use
const express      = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      graphqlHTTP  = require('express-graphql');
      path         = require('path'),
      parser       = require('body-parser'),
      passport     = require('passport'),
      passportJWT  = require('passport-jwt'),
      JwtStrategy  = passportJWT.Strategy,
      ExtractJwt   = passportJWT.ExtractJwt,
      jwt          = require('jsonwebtoken');
      knex         = require('knex'),
      bookshelf    = require('bookshelf'),
      hashPassword = require('bookshelf-secure-password');
//graphql GraphQLSchema
const schema = require('./schema/schema');

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

//allow Cross Orgin Requests
app.use(cors());

//connect to mlab database
//mongoose.connect('mongodb://jackie:test123:port/dbname', { useNewUrlParser: true })
mongoose.connect('mongodb://jackie:test123@ds229771.mlab.com:29771/gql-hflow', { useNewUrlParser: true });
mongoose.connection.once('open',() => {
  console.log('Connected to database');
});

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

// Set static files
let servingFolder = process.env.servingFolder || '/client/build';
app.use(express.static(__dirname + servingFolder));

// Parse the body
app.use(parser.urlencoded({
  extended: false
  })
);

app.use(parser.json());
// graphql requests
app.use('/api/graphql',graphqlHTTP({
  schema:schema,
  graphiql:true
}));
// Homepage of api
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
app.get('/', function (req, res) {
  console.log("In the root /");
  // Load frontend
  let theENV = process.env.NODE_ENV || 'development';
  if(theENV === 'development'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/public/index.html'));
  }
  if(theENV === 'production'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/build/index.html'));
  }

});


app.get('/login', function (req, res) {
  console.log("In /login");
  // Load frontend
  let theENV = process.env.NODE_ENV || 'development';
  if(theENV === 'development'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/public/index.html'));
  }
  if(theENV === 'production'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/build/index.html'));
  }
});
app.get('/resume', function (req, res) {
  console.log("In /resume");
  // Load frontend
  let theENV = process.env.NODE_ENV || 'development';
  if(theENV === 'development'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/public/index.html'));
  }
  if(theENV === 'production'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/build/index.html'));
  }
});
app.get('/newresume', function (req, res) {
  console.log("In /newresume");
  // Load frontend
  let theENV = process.env.NODE_ENV || 'development';
  if(theENV === 'development'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/public/index.html'));
  }
  if(theENV === 'production'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/build/index.html'));
  }
});
app.get('/resumeform', function (req, res) {
  console.log("In /resumeform");
  // Load frontend
  let theENV = process.env.NODE_ENV || 'development';
  if(theENV === 'development'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/public/index.html'));
  }
  if(theENV === 'production'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/build/index.html'));
  }
});
app.get('/dashboard', function (req, res) {
  console.log("In /dashboard");
  // Load frontend
  let theENV = process.env.NODE_ENV || 'development';
  if(theENV === 'development'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/public/index.html'));
  }
  if(theENV === 'production'){
    res.status(200)
     .sendFile(path.join(__dirname, '/client/build/index.html'));
  }
});

// Register a new user
app.post('/api/register', (req, res) => {
  console.log("In /api/register");
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
app.post('/api/authenticate',(req, res)=>{
  console.log("In /api/authenticate");
  //console.log("body data",req.body);
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

// Authorize user route
app.get('/api/userAuthorization', passport.authenticate('jwt', {session:false}), (req, res) => {
  console.log("In /api/userAuthorization");
  //console.log("console.log.req.headers=",req.headers);
  //console.log("console.log.req.user=",req.user);
  res.send(req.user);
});

// Test protected Route
app.get('/api/protected', passport.authenticate('jwt', {session: false }), (req, res) => {
  console.log("In /api/protected");
  res.send('revealed secret');
});

// Setup express config variables
const PORT = process.env.PORT || 5000;

// Start server on specific PORT
app.listen(PORT, ()=>console.log('now listening on PORT: '+PORT + ' running as: ' +process.env.NODE_ENV));
