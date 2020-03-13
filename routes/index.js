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
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM usuarios WHERE gamertag = '"+req.body.gamertag +"' AND senha='"+req.body.password+"';", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send({teste:1})
      con.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
      });

      // res.send(JSON.stringify(result));
    });

  });

  
 
});

module.exports = router;
