const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routes/auth.routes');
const middleware = require('./utils/middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({ message: 'welcome to the server' });
});

// app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
// app.use(middleware.userExtractor);
app.use('/api/v1/auth', authRouter);
app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

module.exports = app;
