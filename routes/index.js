var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/GetUser', function(req, res, next) {

   
    res.end('teste');
});

module.exports = router;
