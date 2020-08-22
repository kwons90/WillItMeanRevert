/* eslint-disable no-shadow */
/* eslint-disable no-extend-native */
/* eslint-disable react/void-dom-elements-no-children */
import React, { useState } from 'react';
import { getChart, stringifyDate } from '../assets/utils';

const currentDate = new Date();
const todayDate = stringifyDate(currentDate);
const defaultStart = new Date();
defaultStart.setFullYear(defaultStart.getFullYear() - 1);
const defaultStartDate = stringifyDate(defaultStart);

const num = 0;

function homePage() {
  const [ticker, setTicker] = useState('IBM');
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(todayDate);
  const [chartType, setChartType] = useState('EV/EBITDA');
  const [chart, setChart] = useState('https://stackathon-flask.herokuapp.com/getChart');
  const [timeStamp, setTimeStamp] = useState(0);


  console.log('chart Type is', chartType);
  console.log('startTime Type is', defaultStartDate);
  console.log('endTime Type is', todayDate);
  console.log('ticker is ', ticker);

  return (
    <div>
      <h1 className="title is-1">Will It Mean Revert?</h1>
      <div key="options" className="chartInputs">
        <form>
          <p className="subtitle is-5">Ticker:</p>
          <div>
            <input
              className="tickerInput"
              type="text"
              id="searchTerm"
              placeholder="Search"
              onChange={(e) => setTicker(e.target.value)}
            />
          </div>
          <div>
            Chart Type:
            <select
              className="select"
              onChange={(e) => {
                setChartType(e.target.value);
              }}
            >
              <option value="EV/EBITDA">EV/EBITDA</option>
              <option value="P/E">P/E</option>
              <option value="P/B">P/B</option>
            </select>
          </div>
          <div>
            <label htmlFor="start">Start Date:</label>
            <input
              type="date"
              id="start"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="end">End Date:</label>
            <input
              type="date"
              id="end"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            onClick={async () => {
              await getChart(ticker, chartType, startDate, endDate);
              setChart('https://stackathon-flask.herokuapp.com/getChart');
              num++;
              setTimeStamp( num );
            }}
          >
            <label>Check!</label>
          </button>
        </form>
      </div>
      <div className="chartContainer">
        <img alt="valuations" src={'https://stackathon-flask.herokuapp.com/getChart'} />
      </div>
      <div className="disclaimer">
        <p>All financial data from Qunadl Core US Fundamentals data - academic use only, not to be commercially distributed</p>
      </div>
    </div>
  );
}

export default homePage;
