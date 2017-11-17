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

UserSchema.methods.isValid = function() {
    console.log("yoooo");
};

var User = mongoose.model('user', UserSchema, 'user');

// User.methods.isValid = function isValid() {
//     console.log("hey!");
// }



module.exports = User;