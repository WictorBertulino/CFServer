var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/GetUser', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let result = [{
    gamertag: '123231',
    password: '23232'
  }]

  console.log(req);
  


  res.send(JSON.stringify(result));
 
});

module.exports = router;
