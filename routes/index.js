var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/GetUser', function(req, res, next) {
let result = {
  gamertag:req.body.gamertag,
  password:req.body.password
}

console.log(req);

    res.end(JSON.stringify(result));
});

module.exports = router;
