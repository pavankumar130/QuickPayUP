var mysql = require('mysql');
var express = require('express');
const { response } = require('express');
var app = express();

app.get('/',function(request,response){
   fetchData(response);
   console.log('clicked 1 time');
  // value();
});
var db = mysql.createConnection({
      host: "localhost",
      user: 'root',
      password:"",
      database: "upi"

});
var final;
function executeQuery(sql,cb){
  db.query(sql,function(error,result,fields){
     if(error) {throw error;}
     cb(result);
  })
}
function fetchData(response){
   executeQuery("Select * from request_to_admin ",function(result){
      final = result;
      response.write('<table border = 2px ><tr>');
      //heading
      
       for(var column in result[0]){
          response.write('<th><label>' +  column + '</label></th>');
          
      }
      response.write('</tr>');

      for(var row in result){
         response.write('<tr>');
         for(var column in result[row]){
            if(column == 'status'){
               
               response.write('<td> <label><a href = "conf.html">'+'verify it'+ '</a></label> </button></td>' )
              function myFunction(){
                  console.log('clicl');
              }
              
            }
            
            else { 
            response.write('<td><label>' + result[row][column] + '</label></td>')
            }
         }
         response.write('</tr>');
      }
     
     response.end('</table>');
  })
}
// function value(req,res){
//     req.write('<input type = "number">input')
    
// }

module.exports = app;