var express = require('express');
var router = express.Router();
var guid = require('guid');

var A3Mongo = require('./../../mongoose/A3Mongoose');
var User = require('./../../models/User');

// GET USER DETAILS
// =============================================================================
router.get('/', function (req, res) {
    res.send("Access user here");
});

// USER SIGN UP (NO Token Required)
// =============================================================================
router.post('/signup', function (req, res) {

    var body = req.body;
    var userDetails = body.user;

    var db = A3Mongo.prototype.getConnection();
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        try {
            var newUser = new User();
            newUser.id = guid.create();
            newUser.firstname = userDetails.firstname;
            newUser.lastname = userDetails.lastname;
            newUser.username = userDetails.username;
            newUser.email = userDetails.email;
            newUser.followingMosques = []; // Not following any mosques at this point
            newUser.save(function (err) {
                if (err) {
                    res.send(err);
                    A3Mongo.prototype.closeConnection();
                }
                res.status(201).json({
                    success: true,
                    message: 'User Created!'
                });
                A3Mongo.prototype.closeConnection();
            });
        } catch (err) {
            A3Mongo.prototype.closeConnection();
        }
    })
});

router.post('/login', function (req, res) { 
    
});

module.exports = router;