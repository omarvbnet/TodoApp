const mysql = require('serverless-mysql')({
  config: {
    host     :'localhost',
    database : 'database_name',
    user     : 'database_user',
    password : 'database_pass'
  }
})

module.exports = mysql;