const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const router = require("./routes/routing");

const { json } = require("body-parser");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "upi"
});

app.use(express.static('Front_end'));
app.use(express.static('views'));
//by default pass index.js
app.use(bodyParser());
app.use("/",router);




app.listen(8090,()=>{
    console.log("App is starting on port ", 8090);
})
