var constants = require('./../../constants/constants');
var A3Mongo = require('./../../mongoose/A3Mongoose');
var User = require('./../../models/User');
var jwt = require('jsonwebtoken');


var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {

    var headers = req.headers;
    var body = req.body;
    if (headers.grant_type === "password") {
        var username = body.username;
        var password = body.password;

        // Check username and password provided
        if ((username != null && username != "") && (password != null && password != "")) {

            // Query the database 
            var db = A3Mongo.prototype.getConnection();
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function () {
                try {
                    User.findOne({ 'username': username }, function (err, user) {
                        if (err) throw err;

                        if (user != null) {
                            // Authenticate then issue token
                            if (user.password == password) {
                                const payload = {
                                    user: user.username
                                };

                                var token = jwt.sign(payload, constants.jwtSecret, {
                                    expiresIn: 85399 // expires in 24 hours
                                });

                                // return the information including token as JSON
                                res.status(201).json({
                                    success: true,
                                    token: token,
                                    expiresIn: 85399 // Seconds
                                });

                                A3Mongo.closeConnection();
                            } else {
                                res.status(400).json({
                                    'message': 'Authentication Failed',
                                    'success': 'true'
                                });
                                A3Mongo.closeConnection();
                            }
                        } else {
                            
                            res.status(204).json({
                                'message': 'User does not exist',
                                'success': false
                            });
                            A3Mongo.closeConnection();
                        }
                    });
                } catch (error) {
                
                    res.status(400).json({
                        'message': 'Authentication Failed',
                        'success': false
                    });
                    A3Mongo.closeConnection();
                }


            });

        } else {
            // Failed authentication (username or password issue)
            res.status(401).json({
                'message': 'Authentication Failed.',
                'success': false
            });
        }

    } else {
        res.status(400).json({
            'message': 'Authentication Failed.',
            'success': false
        });
    }
});



module.exports = router;