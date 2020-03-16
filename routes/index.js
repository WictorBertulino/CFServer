var express = require('express');
var router = express.Router();
var mysql = require('mysql');



/* GET home page. */
router.post('/GetUser', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var con = mysql.createConnection({
    host: "jcrastreamentoveicular00.com.br",
    user: "jcdev",
    password: "jc123",
    database: "cf"
  });
  
  con.connect();
  con.query("SELECT * FROM usuarios WHERE gamertag = '"+req.body.gamertag +"' AND senha='"+req.body.password+"';",function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      con.destroy();
      res.send(JSON.stringify(result));
    })

 // con.query("SELECT * FROM usuarios WHERE gamertag = '"+req.body.gamertag +"' AND senha='"+req.body.password+"';", function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(result);
      
    //   // res.send(JSON.stringify(result));
    // });
  
 
});

router.get('/GetUsersFull', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  var con = mysql.createConnection({
    host: "jcrastreamentoveicular00.com.br",
    user: "jcdev",
    password: "jc123",
    database: "cf"
  });
  
  con.connect();
  con.query("SELECT * FROM usuarios",function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      con.destroy();
      res.send(JSON.stringify(result));
    })


  
 
});






module.exports = router;
