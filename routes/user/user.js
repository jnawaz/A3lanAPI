var express = require('express');
var router = express.Router();
var guid = require('guid');
var apiResponse = require('./../../API Messages/ResponseMessages');
var A3Mongo = require('./../../mongoose/A3Mongoose');
var User = require('./../../models/User');
var userMiddleware = require('./../../middleware/userMiddleware');

// GET USER DETAILS
// =============================================================================
router.get('/', function (req, res) {
    res.send("Access user here");
});

// UPDATE USER DETAILS
// =============================================================================
router.put('/', userMiddleware.authentication, function (req, res) {
    res.send("Access user here");
});

// USER SIGN UP (NO Token Required)
// =============================================================================
router.post('/signup', userMiddleware.authentication, function (req, res) {

    var body = req.body;
    var userDetails = body.user;

    // var email = req.body.email;
    // var password = req.body.password;

    // Validate user details
    if (userDetails.email == null && userDetails.password == null) {
        res.status(400).json({
            success: false,
            code: 'US001',
            message: apiResponse.US001
        });
    } else {

        if (userDetails.email == null || userDetails.password == null) {
            res.status(400).json({
                success: false,
                code: "US002",
                message: apiResponse.US002
            });
        } else {
            var db = A3Mongo.prototype.getConnection();
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function () {
                try {
                    var newUser = new User();
                    newUser.isValid();
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
            });
        }

    }
});

// USER LOGIN
// =============================================================================
router.post('/login', userMiddleware.authentication, function (req, res) {
    //TODO: Implement login
});

module.exports = router;