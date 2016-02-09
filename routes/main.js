var express = require('express');

var router = new express.Router();

router.get('/', function(req, res){
        res.redirect('/mesg/smsmesg')});

module.exports = router;
