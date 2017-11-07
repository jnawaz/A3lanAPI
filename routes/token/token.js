var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    
    var headers = req.headers;
    if (headers.grant_type === "password") {
        var username = headers.username;
        var password = headers.password;
    } else {

    }
});

module.exports = router;