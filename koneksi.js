// import mysql
var mysql =require('mysql')

// buat koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "db_swalayan"
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('MySQL sudah terkoneksi')
});

// export modul
module.exports = conn;