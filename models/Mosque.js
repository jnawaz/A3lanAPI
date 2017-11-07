var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MosqueSchema = new Schema({
    name: String,
    address1: String,
    address2: String,
    towncity: String,
    postcode: String
});

var Mosque = mongoose.model('Mosque', MosqueSchema);

module.exports = Mosque;