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

/**
* gets all days from a month
*/
async function getDays(req, res) {
  const month = req.query.month;

  days = generateDays(month);

  // search db for days in month
  res.json(days);
}

/**
* generates json array of days
*/
function generateDays(month){
  let days = []

  for(let i in range(monthDays[monthDays[months[month]]])) {
    // search db for day in month for user
    // if not found {
      // createDay

    days.append(day)
  }
}

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
