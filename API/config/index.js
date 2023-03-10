require('dotenv').config();
const {createPool} = require('mysql');
// Create connection variable
let connection = createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT_DB,
  multipleStatements: true,
  connectionLimit: 30
});


module.exports = connection;