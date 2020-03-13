var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/GetUser', function (req, res, next) {
  let result = [{
    gamertag: '123231',
    password: '23232'
  }]


  res.send(JSON.stringify(result));
});

module.exports = router;
