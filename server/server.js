// main server file
'use strict'

const express = require('express');
const app = express();
const path = require('path');
//const db = require('./database.js');

// server start
app.listen(8080);

app.use('/', express.static('client'))
app.get('/*', (req, res) => {
  const top = path.resolve('.');
  res.sendFile(path.join(dir));
});

// server functions -- http verbs
