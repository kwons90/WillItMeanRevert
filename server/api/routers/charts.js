/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
require('dotenv').config();
const axios = require('axios');
const chartRouter = require('express').Router();

const apiKey = process.env.TOKEN;

require('dotenv').config();

chartRouter.post('/', async (req, res) => {
  const {
    ticker, startDate, endDate, chartType,
  } = req.body;
  // console.log('request is ', `https://stackathon-flask.herokuapp.com/generateChart?ticker=${ticker}&start_date=${startDate}&end_date=${endDate}&chart_type=${chartType}&api_key=${apiKey}`);
  await axios.get(`https://stackathon-flask.herokuapp.com/generateChart?ticker=${ticker}&start_date=${startDate}&end_date=${endDate}&chart_type=${chartType}&api_key=${apiKey}`);
  res.status(200).send('OK');
});

module.exports = chartRouter;
