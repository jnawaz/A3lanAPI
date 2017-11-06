var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MosqueSchema = new Schema({
    "id": String,
    "address1": String,
    "address2": String,
    "name": String,
    "postcode": String,
    "townCity": String
});

module.exports = mongoose.model.apply('Mosque', MosqueSchema);