var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql = require('mysql');

let final;
app.post('/transfer/secure' , function (req, res) {
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
    var sqla ="SELECT Balance,Bank FROM transfer where Account_no = '"+req.body.Account_noa+"' AND password = '"+req.body.password +"' ";
    con.query(sqla, function (error, val) {
      if (error) throw error;
    bal = val;
      
      
      
      var final = bal[0].Balance - req.body.Amount;
      
      
      if(final<0){
           res.json('Insufficient balance');
      }
     else{ 
    var sqlb = "UPDATE transfer SET Balance = "+final+" where  Account_no = '"+req.body.Account_noa+"'"; 
    con.query(sqlb, function (error, val,fields) {
          if(error)throw error;
          
    } )
    var sqlb = "UPDATE "+bal[0].Bank +" SET Balance = "+final+" where  Account_no = '"+req.body.Account_noa+"'"; 
    con.query(sqlb, function (error, val,fields) {
          if(error)throw error;
          
    } )
     }
     
     
   })

   var sqla ="SELECT Balance,Bank FROM transfer where Account_no = '"+req.body.Account_nob+"'";
   con.query(sqla, function (error, resul) {
     if (error) throw error;
   var fin  = resul;
     
     
     
     var finalb =  parseInt(req.body.Amount) + fin[0].Balance ;
     
    
     
    
   var sqlc = "UPDATE transfer SET Balance = "+ finalb +" where  Account_no = '"+req.body.Account_nob+"'"; 
   con.query(sqlc, function (error, val,fields) {
         if(error)throw error;
          res.write('<h1 >Transfer sussesfully</h1>');
   } )
   var sqlb = "UPDATE "+fin[0].Bank +" SET Balance = "+finalb+" where  Account_no = '"+req.body.Account_nob+"'"; 
   con.query(sqlb, function (error, val,fields) {
         if(error)throw error;
         console.log(fin[0].Bank);
   } )
    
    
  })
   
  });
})


module.exports = app;