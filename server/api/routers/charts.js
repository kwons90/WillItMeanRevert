/* eslint-disable global-require */
// import express JS module into app
// and creates its variable.
require('dotenv').config();
const express = require('express');
const app = express();
const chartRouter = require('express').Router();

const apiKey = process.env.IMDB_API_KEY;

// Function callName() is executed whenever
// url is of the form localhost:3000/name
chartRouter.get('/', async (req, res) => {
  const { spawn } = require('child_process');
  const process = spawn('python', ['./analytics.py',
    req.query.ticker,
    req.query.start_date,
    req.query.end_date,
    req.query.api_key,
  ]);
  process.stdout.on('data', (data) => {
    res.send(data.toString());
  });
});

module.exports = chartRouter;
// function callName(req, res) {

// Use child_process.spawn method from
// child_process module and assign it
// to variable spawn

// Parameters passed in spawn -
// 1. type_of_script
// 2. list containing Path of the script
//    and arguments for the script

// E.g : http://localhost:3000/charts?ticker=MSFT&start_date=2018-01-01&end_date=2020-08-16&chart_type=EVEBITDA
// so, first name = Mike and last name = Will

// Takes stdout data from script which executed
// with arguments and send this data to res object

// }
