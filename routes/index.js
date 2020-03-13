var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/GetUser', function (req, res, next) {
  let result = [{
    gamertag: req.body.gamertag,
    password: req.body.password
  }]


  res.send(JSON.stringify(result));
  res.end();
});

module.exports = router;
