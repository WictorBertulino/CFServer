var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/GetUser', function(req, res, next) {

   console.req(req)
    res.end(JSON.stringify({a:1}));
});

module.exports = router;
