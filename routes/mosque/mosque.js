var express = require('express');
var router = express.Router();

var A3Mongo = require('./../../mongoose/A3Mongoose');
var Mosque = require('./../../models/Mosque');
var apiResponse = require('./../../API Messages/ResponseMessages');

// GET ALL MOSQUES
// =============================================================================
router.get('/', function (req, res) {

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
router.get('/mosqueById', function (req, res) {

});

// FOLLOW MOSQUE
// =============================================================================
router.post('/followMosque', function (req, res) {

});

// EDIT MOSQUE DETAILS
// =============================================================================
router.put('/edit', function (req, res) {

});

module.exports = router;