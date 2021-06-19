var mysql = require('mysql');

// Create a connection
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'dbrestapi'
});

conn.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Connected!!')
    }
});

module.exports = conn;