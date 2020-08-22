import axios from 'axios';

const getChart = async (ticker, chartType, startDate, endDate) => {
  console.log(ticker, chartType, startDate, endDate, 'in utils');
  const res = await axios.post('/api/charts', {
    ticker,
    chartType,
    startDate,
    endDate,
  });
  return res;
};

// 'http:// localhost:3000/charts?ticker=MSFT&start_date=2018-01-01&end_date=2020-08-16&chart_type=EVEBITDA'

const stringifyDate = (dateObj) => {
  const mm = dateObj.getMonth() + 1; // getMonth() is zero-based
  const dd = dateObj.getDate();

  return [dateObj.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
  ].join('-');
};

export {
  stringifyDate,
  getChart,
};
