var express = require('express');
var router = express.Router();

var A3Mongo = require('./../../mongoose/A3Mongoose');
var Mosque = require('./../../models/Mosque');

router.get('/', function(req, res){

    var db = A3Mongo.prototype.getConnection();

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    // console.log("DB Connection Alive");

try {
    Mosque.find({},function(err, mosques){
        if (err){
            res.send(err);
            A3Mongo.prototype.closeConnection();
        }
        if (mosques.length > 0) {
            res.json(mosques);
            A3Mongo.prototype.closeConnection();
        } else {
            res.send("None found");
            A3Mongo.prototype.closeConnection();
        }
    });
} catch (e) {

}
    
});
    
});

module.exports = router;