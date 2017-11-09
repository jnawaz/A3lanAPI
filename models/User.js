var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    followingMosques: []
});

var User = mongoose.model('user', UserSchema, 'user');

module.exports = User;