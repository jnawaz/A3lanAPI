var express = require('express');
var router = express.Router();

var A3Mongo = require('./../../mongoose/A3Mongoose');
var Mosque = require('./../../models/Mosque');
var User = require('./../../models/User');
var apiResponse = require('./../../API Messages/ResponseMessages');
var authMiddleware = require('./../../middleware/authMiddleware');

// GET ALL MOSQUES
// =============================================================================
router.get('/', authMiddleware.authentication, function (req, res) {

    var db = A3Mongo.prototype.getConnection();

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        try {
            Mosque.find({}, function (err, mosques) {
                if (err) {
                    res.status(400).json({
                        success: false,
                        error: err,
                        code: 'MO002',
                        message: apiResponse.MO002
                    });
                    A3Mongo.prototype.closeConnection();
                }
                if (mosques.length > 0) {
                    res.status(200).json({
                        mosques: mosques,
                        success: true
                    });
                    A3Mongo.prototype.closeConnection();
                } else {
                    res.status(204).json({
                        success: false,
                        mosques: [],
                        code: 204
                    });
                    A3Mongo.prototype.closeConnection();
                }
            });
        } catch (e) {
            res.status(400).json({
                success: false,
                error: e.message,
                code: 'MO003',
                message: apiResponse.MO003
            });
        }

    });

});

// GET MOSQUE BY ID
// =============================================================================
router.get('/mosqueById', authMiddleware.authentication, function (req, res) {

    var db = A3Mongo.prototype.getConnection();
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function () {
        try {
            Mosque.find({
                "mosqueId": req.query.mosqueId
            }, function (err, mosque) {
                if (err) {
                    res.status(400).json({
                        success: false,
                        error: err,
                        code: 'MO004',
                        message: apiResponse.MO004
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        mosque: mosque[0]
                    });
                }
            });
        } catch (e) {
            res.json(400).json({
                success: false,
                message: apiResponse.MO005,
                code: 'MO005'
            });
        }
    });
});

// FOLLOW MOSQUE
// =============================================================================
router.post('/followMosque', authMiddleware.authentication, function (req, res) {

    var userId = req.decoded.userId;
    var mosqueId = req.body.mosque.mosqueId;

    if (mosqueId == null) {
        res.status(400).json({
            code: 'MO006',
            message: apiResponse.MO006,
            success: false
        });
    } else {
        var db = A3Mongo.prototype.getConnection();
        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('open', function () {
            try {
                User.update({
                    "id": userId
                }, {
                    $push: {
                        followingMosques: mosqueId
                    }
                }, {
                    new: false
                }, function (err, user) {
                    if (err) {
                        res.status(400).json({
                            success: false,
                            code: 'MO007',
                            error: err,
                            message: apiResponse.MO007
                        });
                        A3Mongo.prototype.closeConnection();
                    } else {
                        res.status(200).json({
                            message: "You successfully followed the mosque.",
                            updatedUser: user
                        });
                        A3Mongo.prototype.closeConnection();
                    }
                });
            } catch (e) {
                res.status(400).json({
                    error: e,
                    success: false,
                    code: 'MO008',
                    message: apiResponse.MO008
                });
                A3Mongo.prototype.closeConnection();
            }
        });
    }
});

// EDIT MOSQUE DETAILS
// =============================================================================
router.put('/update', function (req, res) {
    var user = req.decoded;
    var updatedMosque = req.body.mosque;
    var db = A3Mongo.prototype.getConnection();

    if (updatedMosque == null) {
        res.status(403).json({
            success: false,
            code: 'MO009',
            message: apiResponse.MO009
        });
    } else {
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            try {
                Mosque.update({
                    "mosqueId": updatedMosque.mosqueId
                }, {
                    $set: {
                        "address1": updatedMosque.address1,
                        "address2": updatedMosque.address2,
                        "towncity": updatedMosque.postcode,
                        "postcode": updatedMosque.postcode
                    }
                }, {
                    new: false
                }, function (err, mosque) {
                    if (err) {
                        res.status(400).json({
                            success: false,
                            code: 'MO010',
                            message: apiResponse.MO010
                        });
                        A3Mongo.prototype.closeConnection();
                    } else {
                        res.status(200).json({
                            message: 'Mosque successfully updated.'
                        });
                        A3Mongo.prototype.closeConnection();
                    }
                })
            } catch (e) {
                res.json(400).json({
                    success: false,
                    code: 'MO011',
                    message: apiResonse.MO011,
                    error: e
                });
            }
        });
    }
});

module.exports = router;