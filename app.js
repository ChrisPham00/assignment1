const express = require('express');
const app = express();
const parsedTweets = require("./routes/parsedTweets");
const bodyParser = require("body-parser")

//Enables the use of bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Allows the app to use the route /parsedTweets which will handle
//most of the server functions(GET,POST,PUT,DELETE)
app.use('/parsedTweets',parsedTweets);

//Allows for the use of a premade html file for the website
app.use(express.static(__dirname+'/public'))
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//Exports app so server.js can use
module.exports = app;

