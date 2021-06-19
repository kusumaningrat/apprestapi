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