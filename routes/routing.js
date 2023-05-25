const express = require("express");
const router  = express.Router();
const path = require("path");
const App = require("./admin");
const Transf = require("./transfer");

const Add_bal = require("./add_balance");
const Requ = require("./req_to_adm");
const Add_acc = require("./add_account");
const Signup = require("./signup");
const Login = require("./login");

var mysql = require('mysql');

router.post("/monk",Requ);
router.post("/signup.html/signup",Signup);
router.post("/transfer/secure",Transf);

router.post("/add_balance",Add_bal);
router.post("/login.html/login",Login);
router.post("/add_account.html/user_page",Add_acc);
//initial page
router.get('/',(req,res) =>{
    res.sendFile(path.json( _dirname, "/../views/index.html"));
})

//admin acces page

const check = (req,res,next) =>{
    if(req.body.ID == "Mihir" && req.body.password == "1234"){
        next();
    }
    else{
        res.json("NOT permittd");
    }
    }
    router.use("/admin",App);
   
    router.post('/user',check,(req,res)=>{
       
        res.redirect("/admin")
        
    });
    const bent = (req,res,next)=>{
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "upi"
          });
  con.connect(function(err){
  if(err) throw err;
  var sql ="SELECT * FROM request_to_admin where Account_no = "+req.body.aadhar_no+"";
  con.query(sql,function(err,result,fields){
      if(err) throw err;

     var final = result;
     
     
     
   var sql = "INSERT INTO customer ( Name ,Email,Phone_no,Aadhar_no) VALUES ('"+ final[0].Name +" ' , '"+ final[0].Email + " ','"+final[0].Phone_no +"','"+final[0].Aadhar_no+"')";
   con.query(sql, function (err, result) {
     if (err) throw err;
    console.log("1 record inserted to customer");
  });

  if(final[0].Bank == "Bank-A"){
      
  let pass = final[0].Account_no + 20;
     var sqla = "INSERT INTO banka (Aadhar_no , Account_no , Balance , Admin ,password ) VALUES ( '"+final[0].Aadhar_no + "', '"+final[0].Account_no + "' ,'"+final[0].Amount +"','"+final[0].Admin_id+"','"+pass+"')";
   con.query(sqla, function (err, result) {
     if (err) throw err;
    console.log("Account created in bank a sussesfully and having balance :" + final.Balance);
  });
  }
  else if(final[0].Bank == "Bank-B"){
      
  let pass = final[0].Account_no + 20;
    var sqla = "INSERT INTO bankb (Aadhar_no , Account_no , Balance , Admin ,password ) VALUES ( '"+final[0].Aadhar_no + "', '"+final[0].Account_no + "' ,'"+final[0].Amount +"','"+final[0].Admin_id+"','"+pass+"')";
  con.query(sqla, function (err, result) {
    if (err) throw err;
   console.log("Account created in bank B sussesfully and having balance :" + final.Balance);
 });
 }
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
  to: final[0].Email,
  subject: 'Account Created',
  text: 'Account no. ' + final[0].Account_no +' Password: ' + (final[0].Account_no + 20)
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + final[0].Email);
  }
});
});
var sql ="DELETE  FROM request_to_admin where Account_no = "+req.body.aadhar_no;+"";
  con.query(sql,function(err,result,fields){
      if(err) throw err;
      console.log("deleted");
  })

 

});
next();
    }
    router.post('/admin2',bent,(req,res) =>{
        res.redirect("/admin")
        
    })
    
    

module.exports = router;