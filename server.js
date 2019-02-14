const express = require('express');
const server = express();
const morgan = require('morgan');
const connectDB = require('./connect');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Routes
const routes = require('./api/router');
routes(server);

server.use(morgan('dev'));
connectDB();

server.listen(port, () => {
  console.info(`> Running on http://localhost:${port}`);
});
