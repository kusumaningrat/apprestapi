var mysql = require('mysql');

// Create a connection
const conn = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '',
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