var express = require('express');
var router = express.Router();

var A3Mongo = require('./../../mongoose/A3Mongoose');
var Mosque = require('./../../models/Mosque');
var User = require('./../../models/User');
var apiResponse = require('./../../API Messages/ResponseMessages');
var authMiddleware = require('./../../middleware/authMiddleware');

// GET ALL MOSQUE A3LANS
// =============================================================================
router.get('/', authMiddleware.authentication, function (req, res) {

});