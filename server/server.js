// main server file
'use strict'

const express = require('express');
const app = express();
const path = require('path');
//const db = require('./database.js');

app.listen(8080);
app.use('/', express.static(path.join(__dirname, '/client/'), {extensions: 'html'}));
//app.use('/', express.static('client', {extensions: 'html'}));
/*
app.use('/', express.static('client', {extensions: 'html'}));
app.get('/*', (req, res) => {
  let top = path.resolve('.');
  top = top.slice(0, -7);

  const dir = `${top}/client/index.html`;
  res.sendFile(path.join(dir));
});
*/

// server functions -- http verbs
