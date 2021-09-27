const mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotel_mascotas'
})

conn.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Conectado')
    }
});

module.exports =conn;


