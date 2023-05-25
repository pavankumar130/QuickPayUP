var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');


    const bent = (req,res,next)=>{
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "upi"
          });
  con.connect(function(err){
  if(err) throw err;
  var sql ="SELECT * FROM paise_de where user_name = '"+req.body.user_name+"' AND password_pd = '"+req.body.password +"' ";
  con.query(sql,function(err,result,fields){
      if(err) throw err;
       else {
        //params
       next();
       }
    })
    
   
    })
}
    app.post('/login.html/login',bent,(req,res) =>{
        res.redirect("/final.html")

    })
    
    

module.exports = app;