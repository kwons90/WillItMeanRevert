const apiRouter = require('express').Router();

apiRouter.use('/charts', require('./charts'));

module.exports = apiRouter;
