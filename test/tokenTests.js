var assert = require('assert');
var a3jwt = require('./../jwt/jwtToken');

describe('New Token', function() {
  describe('#New JWT Token', function() {
    it('should generate and return a new web token', function() {
      var token = a3jwt.newToken();
      assert(token != null);
    });
  });
});