
//dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const inquirer = require('inquirer')
const pug = require('pug')
const axios = require('axios')
const PORT = 3000



// data


//routes 

server.get('/', function(req, res) {
  res.send('Note Taker!');
});

server.listen(PORT, function() {
  console.log('App listening on PORT' + PORT);
});