var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql = require('mysql');

let final;
app.post('/add_balance' , function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "upi"
  });
  var bal;
con.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
    var sqla ="SELECT Balance FROM "+req.body.Bank+" where Account_no = '"+req.body.Account_no+"'";
    con.query(sqla, function (error, val) {
      if (error) throw error;
    bal = val;
      
      
      console.log(bal[0].Balance);
      var final;
       final = parseInt(req.body.amount) + bal[0].Balance ;
       console.log(final);
      
      
     
    var sqlb = "UPDATE transfer SET Balance = "+final+" where  Account_no = '"+req.body.Account_no+"'"; 
    con.query(sqlb, function (error, val,fields) {
          if(error)throw error;
          
     } )
    var sqlb = "UPDATE "+req.body.Bank +" SET Balance = "+final+" where  Account_no = '"+req.body.Account_no+"'"; 
    con.query(sqlb, function (error, val,fields) {
          if(error)throw error;
          res.write('<h1>Amount added sussesfully</h1>');
    } )
     
     
     
   })
 
   
  });
})


module.exports = app;