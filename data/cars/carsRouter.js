const express = require('express');

// database access using knex
const knex = require('../../dbConfig.js');
// const carsDb = require('./carsHelper.js');

const router = express.Router();

// refactored code using helpers
// router.get('/', )

// original using knex basic GET / using knex dbConfig.js
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

// original using knex basic POST / using knex dbConfig.js
router.post('/', (req, res) => {

    knex   
        .insert(req.body)
        .into('cars')
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ error: `Failed to add the car to the database`});
        });
});

// original using knex basic GET /:id using knex dbConfig.js
router.get('/:id', (req, res) => {

    knex
        .select('*')
        .from('cars')
        .where('id', '=', req.params.id)
        .first()
        .then(car => {
            res.status(200).json(car);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get the car from the database.'})
        })
})

module.exports = router;