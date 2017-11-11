var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: String, // Guid
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    followingMosques: [] // Array of Mosque Ids
});

var User = mongoose.model('user', UserSchema, 'user');

module.exports = User;