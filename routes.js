'use strict';

module.exports = function(apps){
    var myapp = require('./controller');

    app.route('/')
    .get(myapp.index);
};

