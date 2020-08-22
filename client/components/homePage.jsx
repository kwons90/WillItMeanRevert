/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-extend-native */
/* eslint-disable react/void-dom-elements-no-children */
import React, { useState } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import { getChart, stringifyDate, generateDummy } from '../assets/utils';



// To access to bulmaCalendar instance of an element
const element = document.querySelector('#my-element');
if (element) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  element.bulmaCalendar.on('select', (datepicker) => {
    console.log(datepicker.data.value());
  });
}

const currentDate = new Date();
const todayDate = stringifyDate(currentDate);
const defaultStart = new Date();
defaultStart.setFullYear(defaultStart.getFullYear() - 1);
const defaultStartDate = stringifyDate(defaultStart);

function homePage() {
  const [ticker, setTicker] = useState('IBM');
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(todayDate);
  const [chartType, setChartType] = useState('EV/EBITDA');
  const [dummy, setDummy] = useState(generateDummy());

  console.log('chart Type is', chartType);
  console.log('startTime Type is', defaultStartDate);
  console.log('endTime Type is', todayDate);
  console.log('ticker is ', ticker);

  return (
    <div>
      <h1 className="title is-2">Will It Mean Revert?</h1>
      <h1 className="subtitle is-4">All valuations are relative</h1>
      <div key="options" className="chartInputs">
        <form>
          <div className="field">
            <label className="label">Ticker</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                id="searchTerm"
                onChange={(e) => setTicker(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Chart Type</label>
            <div className="control">
              <div className="select">
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
            </div>
          </div>
          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Text input"
                id="searchTerm"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">End Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Text input"
                id="searchTerm"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="button is-link"
            type="submit"
            onClick={async () => {
              await getChart(ticker, chartType, startDate, endDate);
              setDummy(generateDummy());
            }}
          >
            <label>Check!</label>
          </button>
        </form>
      </div>
      <div className="chartContainer">
        <img alt="valuations" src={`https://stackathon-flask.herokuapp.com/getChart?dummy=${dummy}`} />
      </div>
      <div className="disclaimer">
        <p className="is-small">All financial data from Qunadl Core US Fundamentals data - academic use only, data is not to be redistributed</p>
        <br />
      </div>
      <div className="explanations">
        <h2 className='title is-4'>Explanations</h2>
        <h2 className='title is-5'>EV/EBITDA</h2>
        <p className="is-medium">Enterprise Value is the value of the entire company and its assets</p>
        <p className="is-medium">EBITDA means "Earnings before Tax, Interest, Depreciation, and Amortization" is considered a handy substitute for cashflows</p>
        <p className="is-medium">EV/EBITDA is a multiple that investors are willing to pay for all assets relative to cashflows before debt, tax, and other non-cash charges</p>
        <br />
        <h2 className='title is-5'>P/E</h2>
        <p className="is-medium">Price stands for equity value of the company, which is net of net debt</p>
        <p className="is-medium">Earnings stands for earnings attributable to shareholders after interest, tax, etc.</p>
        <p className="is-medium">P/E is a multiple investors are willing to pay for the shares relative to the earnings attrituable to those shares</p>
        <br />
        <h2 className='title is-5'>P/B</h2>
        <p className="is-medium">Price stands for equity value of the company, relative to the book value of the equity</p>
        <p className="is-medium">This is relevant for financial institutions ("FIG") as FIGS are required to report book value as market value</p>
        <p className="is-medium">P/B value below 1 suggests that the company may be more valuable being liquidated</p>
      </div>
    </div>
  );
}

// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]', {});

// Loop on each calendar initialized
calendars.forEach(calendar => {
	// Add listener to date:selected event
	calendar.on('date:selected', date => {
		console.log(date);
	});
});

export default homePage;

