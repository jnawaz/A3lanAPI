var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    res.send("Woohoo token creation");
});

module.exports = router;