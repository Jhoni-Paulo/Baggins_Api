require('dotenv/config')

module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST ? process.env.MYSQL_HOST : '127.0.0.1',
  database: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'bagginsdb',
  username: process.env.MYSQL_USERNAME ? process.env.MYSQL_USERNAME : 'root',
  password: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : 'admin'
};
