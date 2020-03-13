var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "jcrastreamentoveicular00.com.br",
  user: "jcdev",
  password: "jc123",
  database: "cf"
});


/* GET home page. */
router.post('/GetUser', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  let result = []
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM usuarios", function (err, result, fields) {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  });

  
 
});

module.exports = router;
