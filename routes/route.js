'use strict';

const {json} = require('body-parser');

module.exports = function(app) {
    var jsonku = require('../controllers/controller')

    // endpoint root
    app.route('/')
        .get(jsonku.index)

    
    // endpoint tampil semua data
    app.route('/product')
        .get(jsonku.tampilsemuaproduk);

    
    // endpoint tampil data berdasarkan id
    app.route('/product/:id')
        .get(jsonku.tampilberdasarkanid);

        
    // endpoint tambah data
    app.route('/tambah')
        .post(jsonku.tambahProduk);


    // endpoint ubah data
    app.route('/ubah/:id')
        .put(jsonku.ubahProduk);


    // endpoint hapus data
    app.route('/hapus/:id')
        .delete(jsonku.hapusProduk);
}