var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var constants = require('./../constants/constants');
var apiResponse = require('./../API Messages/ResponseMessages');

module.exports = {
    authentication: function (req, res, next) {
        var token = req.headers['bearer'];

        if (req.originalUrl === "/api/user/signup") {
            next();
        } else {
            if (token) {
                jwt.verify(token, constants.jwtSecret, function (err, decoded) {
                    if (err) {
                        return res.status(401).json({
                            success: false,
                            message: apiResponse.GO001,
                            code: 'GO001'
                        });
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                return res.status(403).json({
                    success: false,
                    message: apiResponse.GO001,
                    code: 'GO002'
                });
            }
        }
    }
}