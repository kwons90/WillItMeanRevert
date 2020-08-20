/* eslint-disable react/void-dom-elements-no-children */
import React, { useState } from 'react';

const axios = require('axios');

const currentDate = new Date();
const todayDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
const defaultStartDate = `${currentDate.getFullYear() - 2}-${currentDate.getMonth()}-${currentDate.getDate()}`;

function homePage() {
  const [ticker, setTicker] = useState('IBM');
  const [startDate, setStartDate] = useState(todayDate);
  const [endDate, setEndDate] = useState(defaultStartDate);
  const [chartType, setChartType] = useState('EV/EBITDA');
  console.log('chart Type is', chartType);
  console.log('startTime Type is', defaultStartDate);
  console.log('endTime Type is', todayDate);
  console.log('ticker is ', ticker);

  return (
    <div>
      <h1 className="title is-1">Will It Mean Revert?</h1>
      <div key="options" className="chartInputs">
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
              console.log(e.target.value);
              console.log(chartType);
            }}
          >
            <option value="EV/EBITDA">EV/EBITDA</option>
            <option value="P/E">P/E</option>
            <option value="EV/Revenue">EV/Revenue</option>
          </select>
        </div>
        <div>
          <label htmlFor="start">Start Date:</label>
          <input
            type="date"
            id="start"
            onChange={(e) => {
              setStartDate(e.target.value);
              console.log(startDate);
            }}
          />
        </div>
        <div>
          <label htmlFor="start">End Date:</label>
          <input
            type="date"
            id="start"
            onChange={(e) => {
              setEndDate(e.target.value);
              console.log(endDate);
            }}
          />
        </div>
        <button
          type="submit"
          onSubmit={() => {
            axios.get(`/api/charts?ticker=${ticker}&start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`);
          }}
        >
          <label>Will it mean revert?</label>
        </button>
      </div>
      <div className="chartContainer">
        Chart
      </div>
      <div className="disclaimer">
        <p>All financial data from IEX finance data</p>
      </div>
    </div>
  );
}

export default homePage;
