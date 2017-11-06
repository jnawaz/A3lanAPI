var assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function(){
        it('should return 0 when the first value is accessed', function(){
            assert.equal(0, [1,2,3].indexOf(1));
        });
    });
});