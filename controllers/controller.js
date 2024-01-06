'use strict';

var response = require('../rest')
var connection = require('../koneksi')

exports.index = function(req, res) {
    response.ok("APLIKASI REST API berjalan!", res)
}

// Method GET untuk menampilkan data
exports.tampilsemuaproduk = function(req, res) {
    connection.query('SELECT * FROM produk', function(error, rows, field){
        if(error) {
            console.log(error);
        } else{
            response.ok(rows, res);
        }
    })
}

// GET untuk tampil berdasarkan id
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM produk WHERE id = ?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        })
}

// Method POST untuk menambah data
exports.tambahProduk = function(req, res) {
    // body data yg akan ditambah
    var nama_produk = req.body.nama_produk;
    var merk = req.body.merk;
    var harga = req.body.harga;

    connection.query('INSERT INTO produk (nama_produk, merk, harga) VALUES (?, ?, ?)',
        [nama_produk, merk, harga],
        function(error, rows, fields) {
            if(error) {
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan data Produk!", res)
            }
        });
}

// Method PUT untuk mengubah data berdasarkan id
exports.ubahProduk = function(req, res) {
    // body data yg akan diubah
    var id = req.body.id;
    var nama_produk = req.body.nama_produk;
    var merk = req.body.merk;
    var harga = req.body.harga;

    connection.query('UPDATE produk SET nama_produk = ?, merk = ?, harga = ? WHERE id = ?',
        [nama_produk, merk, harga, id],
        function(error, rows, fields) {
            if(error) {
                console.log(error)
            } else{
                response.ok("Data berhasil diubah!", res)
            }
        })
}

// Method DELETE untuk menghapus data berdasarkan id
exports.hapusProduk = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM produk WHERE id = ?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error)
            } else{
                response.ok("Data berhasil dihapus!", res)
            }
        })
}