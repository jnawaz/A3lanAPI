var express = require('express');
var router = express.Router();
var guid = require('guid');
var apiResponse = require('./../../API Messages/ResponseMessages');
var A3Mongo = require('./../../mongoose/A3Mongoose');
var User = require('./../../models/User');
var userMiddleware = require('./../../middleware/userMiddleware');

// GET USER DETAILS
// =============================================================================
router.get('/', userMiddleware.authentication, function (req, res) {
    var db = A3Mongo.prototype.getConnection();

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        try {
            User.find({"id": "12b07609-ffae-d58d-216d-7db5c5fb697d"}, function (err, user) {
                if (err) {
                    res.status(400).json({
                        success: false, 
                        error: err,
                        code: 'US004',
                        message: apiResponse.US004
                    });
                    A3Mongo.prototype.closeConnection();
                } else {

                    A3Mongo.prototype.closeConnection();
                }
            });
        } catch (e) {

            A3Mongo.prototype.closeConnection();
        }

    });
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
                    // newUser.isValid();
                    newUser.isValid();
                    newUser.id = guid.create();
                    newUser.firstname = userDetails.firstname;
                    newUser.lastname = userDetails.lastname;
                    newUser.username = userDetails.username;
                    newUser.email = userDetails.email;
                    newUser.followingMosques = []; // Not following any mosques at this point
                    newUser.save(function (err) {
                        if (err) {
                            //TODO: handle error here.
                            res.send(err);
                            A3Mongo.prototype.closeConnection();
                        } else {
                            res.status(201).json({
                                success: true,
                                message: 'User Created!'
                            });
                            A3Mongo.prototype.closeConnection();
                        }
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

    var user = req.decoded;

    // Check Login Counter
    if (user.userLoginCounter >= 3) {
        res.status(401).json({
            success: false,
            code: 'US003',
            message: apiResponse.US003
        });
    } else {
        res.status(200).json({
            success: true,
            user: req.decoded
        });
    }

});

module.exports = router;