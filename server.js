const express = require('express');

// bring in the router here
// const carsRouter = require('./data/cars/carsRouter.js');

const server = express();

server.use(express.json());

// carsRouter
// server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h2>Cars Database is running!! 🤙🚘</h2>');
});

module.exports = server;