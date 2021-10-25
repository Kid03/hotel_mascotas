const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotel_mascotas'
});

conn.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('la base de datos esta conectada');
    }
});

module.exports=conn;