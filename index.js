"use strict";

//import modules
var express = require('express');
var fs = require('fs');
var mysql = require('mysql');

//establish server
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.listen(8080, function(){
    console.log('Example app listening on port 8080!');
});
