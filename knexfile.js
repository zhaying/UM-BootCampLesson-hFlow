//Enable use of environment variables in .env
const dotenv = require('dotenv');
dotenv.config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      charset: process.env.MYSQL_CHAR,
    }
  }

};
