'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('REST App Running Well!!',res);
}

// Displaying all mahasiswa data

exports.tampilDataMahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error,rows,fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows,res);
        }
    });
};

exports.tampilDataMahasiswaid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error,rows,fields){
            if(error){
                console.log(error)
            }else{
                response.ok(rows,res)
            }
        }
    
    )
}