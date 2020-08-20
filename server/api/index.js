const path = require('path');
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const app = require('../server');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../../public');
const DIST_PATH = path.join(__dirname, '../../dist');

// const preventDirectAccess = (req, res, next) => {
//   if (!req.headers.referer) {
//     res.sendStatus(401);
//   } else {
//     next();
//   }
// };

app.use(express.json());
app.use(cors());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
// app.use(preventDirectAccess);
app.use('/api', require('./routers/index'));

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

app.listen(PORT, () => {
  console.log(chalk.greenBright(`Server is now listening on PORT:${PORT}`));
});

module.exports = {
  app,
};
