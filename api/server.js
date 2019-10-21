const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/user-router');
const priceRouter = require('../price/price-router');
const listingsRouter = require('../listings/listings-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/price', priceRouter);
server.use('/api/listings', listingsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;