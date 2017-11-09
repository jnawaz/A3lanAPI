var express = require('express');
var router = express.Router();
var guid = require('Guid');

var A3Mongo = require('./../../mongoose/A3Mongoose');
var User = require('./../../models/User');

router.get('/', function (req, res) {
    res.send("Access user here");
});

router.post('/signup', function (req, res) {

    var db = A3Mongo.prototype.getConnection();
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        try {
            var newUser = new User();
            newUser.id = guid.create();
            newUser.firstname = "Firstname";
            newUser.lastname = "Lastname";
            newUser.email = "testemail@email.com";
            newUser.followingMosques = [];
            newUser.save(function (err) {
                if (err) {
                    res.send(err);
                    A3Mongo.prototype.closeConnection();
                }
                res.status(201).json({
                    message: 'User Created!'
                });
                A3Mongo.prototype.closeConnection();
            });
        } catch (err) {
            A3Mongo.prototype.closeConnection();
        }
    })
});

module.exports = router;