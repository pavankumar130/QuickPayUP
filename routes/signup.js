var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql = require('mysql');

let final;
app.post('/signup.html/signup' , function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "upi"
  });
con.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
     let add_no = req.body.Aadhar_no ;
     let user_name = add_no +Math.floor(Math.random() * 100);
     let password = add_no +Math.floor(Math.random() * 100);
    var sql = "INSERT INTO paise_de (Aadhar_no ,user_name , password_pd) VALUES ( '"+add_no+"', '"+ user_name+"', '"+password+"' )";
    con.query(sql, function (error, result) {
       if (error) throw error;
       console.log('account created');
     
    });
      //send email
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'paisedeproject@gmail.com',
      pass: '@paisede'
    }
  });
  
  var mailOptions = {
    from: 'paisedeproject@gmail.com',
    to: req.body.Email,
    subject: 'Account Created',
    text: 'User_name:' + user_name  +'  Password: ' + password 
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + req.body.Email);
    }
  });
  });
console.log("response");
res.end(JSON.stringify("Your user name and password is send to your email login  from their "),);
})


module.exports = app;