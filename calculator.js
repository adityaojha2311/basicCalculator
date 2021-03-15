
 const express =  require("express");
 const bodyParser = require("body-parser");

 const app = express();
app.use(bodyParser.urlencoded({extended: true})); // to write this code when using body parser

 app.get("/",function(req,res){
     res.sendFile(__dirname + "/index.html") ;//dirname - for directory for adding html
 });
 app.post("/",function(req,res){
   // console.log(req.body);  to get the form data from html

   var number1 = Number(req.body.num1);
   var number2 = Number(req.body.num2);
   var sym = req.body.symbol;
   if(sym=='+')
   var result = number1 + number2;
   if(sym=='-')
   var result = number1 - number2;
   if(sym=='*')
   var result = number1 * number2;
   if(sym=='/')
   var result = number1 / number2;



     res.send('THE RESULT IS:' + result);
 });


 app.listen(3000,function(){
   console.log('Server is running on port 3000');
 });


// NOTES

// bodyParser works with express
// 1. we have added body parser  to get the data  from the form created in html
