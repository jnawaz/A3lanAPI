var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var constants = require('./../../constants/constants');

var Mosque = require('./../../models/Mosque');

router.get('/', function(req, res){
    

var mongoose = require('mongoose');
mongoose.connect(constants.dbConnection);
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(){
    console.log("DB Connection Alive");

    Mosque.find({},function(err, mosques){
        if (err){
            res.send(err);
        }
        if (mosques.count > 0) {
            res.send(mosques);
        } else {
            res.send("None found");
        }
    });
});
    
});

module.exports = router;