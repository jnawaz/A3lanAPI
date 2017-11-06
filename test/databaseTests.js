var assert = require('assert');
var mongoose = require('mongoose');
var constants = require('../constants/constants.js');

describe('MongoDB', function() {
    describe('#Connect', function(){
        it('should connect to the sandbox', function(){
            mongoose.connect(constants.dbConnection);
        });
    });
});