const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const middleware = require('./utils/middleware');
const routerApi = require('./routes');
const error = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(middleware.tokenExtractor);
routerApi(app);
app.use(middleware.errorHandler);
// app.use(error);
// app.use(middleware.unknownEndpoint);

module.exports = app;
