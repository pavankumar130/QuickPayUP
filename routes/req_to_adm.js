var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql = require('mysql');

let final;
app.post('/monk' , function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "upi"
  });
con.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
     let add_no = req.body.aadhar_number ;
    var sql = "INSERT INTO request_to_admin (Amount , Aadhar_no ,Account_no , Doc  , status , Name , Email , Phone_no , Bank) VALUES ( '"+ req.body.amount +"','"+ add_no +"','"+ add_no + Math.floor(Math.random() * 100) +"','"+ req.body.amountp +"',' NULL ','"+ req.body.name +"','"+ req.body.email +"','"+ req.body.phone_number +"' ,'"+req.body.Bank +"')";
    con.query(sql, function (error, result) {
       if (error) throw error;
       console.log('account created');
     
    });
    
  });
console.log("response");
res.write('<h1>Request is send to admin , he will create your account  and your account number and password is send to your entered email </h1>');
})


module.exports = app;