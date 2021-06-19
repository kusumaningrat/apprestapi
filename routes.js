'use strict';

module.exports = function(app){
    var myapp = require('./controller');

    app.route('/')
        .get(myapp.index);
    
    app.route('/tampil')
        .get(myapp.tampilDataMahasiswa);

    app.route('/tampil/:id')
        .get(myapp.tampilDataMahasiswaid);
};

