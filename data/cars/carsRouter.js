const express = require('express');

// database access using knex
const knex = require('../../dbConfig.js');
// const carsDb = require('./carsHelper.js');

const router = express.Router();

// basic GET / using knex dbConfig.js
router.get('/', (req, res) => {
    
    knex 
        .select('*')
        .from('cars')
        .where({})
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get cars from database'})
        })

})

module.exports = router;