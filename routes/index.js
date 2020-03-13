var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/GetUser', function(req, res, next) {

    let obj =
    { 
      Gamertag:"bertz Cf",
      senha:"123",
    }
    res.end(JSON.stringify(obj));
});

module.exports = router;
