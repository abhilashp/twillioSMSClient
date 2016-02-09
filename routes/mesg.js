var express = require('express');
var router = new express.Router();
var mymesg = require("../mesg.js");

router.get('/smsmesg', mymesg.smsmesg);
router.get('/smsreceive', mymesg.smsreceive);
router.get('/phonereceive', mymesg.phonereceive);

module.exports = router;
