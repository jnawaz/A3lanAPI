var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    "userId": String,
    "email": String,
    "password": String,
    "firstname": String,
    "lastname": String
});

module.exports = mongoose.model.apply('User', UserSchema);