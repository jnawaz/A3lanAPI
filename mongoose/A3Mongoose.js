var constants = require('./../constants/constants');
var mongoose = require('mongoose');

var A3Mongoose = function () {
    // always initialize all instance properties
};

A3Mongoose.prototype.getConnection = function () {
    var db = this.openConnection();
    return db;
};

A3Mongoose.prototype.openConnection = function () {
    this.closeConnection();
    mongoose.connect(this.getDBHost());

    return mongoose.connection;
};

A3Mongoose.prototype.closeConnection = function () {
    mongoose.connection.close();
};

A3Mongoose.prototype.getDBHost = function () {

    var dbHost = '';

    // if (globals.environment == 1) {
    //     dbHost = 'mongodb://localhost/A3lan-Dev';
    // } else if (globals.environment == 2) {
    //     dbHost = '';
    // } else if (globals.environment == 3) {
    //     dbHost = '';
    // }
    dbHost = constants.dbConnection;

    return dbHost;
};

// export the class
module.exports = A3Mongoose;