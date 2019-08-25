// db interface
'use strict'

//const fs = require('fs');
//const util = require('util');
const config = require('./config');
const mysql = require('mysql2/promise');
let sql;

/**
* initialises database connection
* only run once
*/
async function init() {
  sql = await mysql.createConnection(config.mysql);
}

module.exports = {
  init: init
}
