const express = require('express')
const app = express()
const mysql = require('mysql')
const inquirer = require('inquirer')
const pug = require('pug')
const axios = require('axios')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})