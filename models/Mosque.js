var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MosqueSchema = new Schema({
    mosqueId: String,
    name: String,
    address1: String,
    address2: String,
    towncity: String,
    postcode: String
});

var Mosque = mongoose.model('mosque', MosqueSchema, 'mosque');

module.exports = Mosque;