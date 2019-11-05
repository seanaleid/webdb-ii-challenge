const express = require('express');

// database access using knex
const knex = require('../../dbConfig.js');
const carsDb = require('./carsHelper.js');

const router = express.Router();

// refactored code using helpers
router.get('/', (req, res) => {
    const cars = req.query;

    carsDb.find(cars)
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get cars from database.'})
        })
})

// original using knex basic GET / using knex dbConfig.js
// router.get('/', (req, res) => {
    
//     knex 
//         .select('*')
//         .from('cars')
//         .where({})
//         .then(cars => {
//             res.status(200).json(cars);
//         })
//         .catch(err => {
//             res.status(500).json({ error: 'Failed to get cars from database'})
//         })

// })

// refactor using insert helper
router.post('/', (req,res) => {
    const newCar = req.body;

    carsDb.insert(newCar)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to insert the car to the database.'})
        })
})

// original using knex basic POST / using knex dbConfig.js
// router.post('/', (req, res) => {

//     knex   
//         .insert(req.body)
//         .into('cars')
//         .then(id => {
//             res.status(201).json(id);
//         })
//         .catch(err => {
//             res.status(500).json({ error: `Failed to add the car to the database`});
//         });
// });

// refactor using getById helper
router.get('/:id', (req, res) => {
    const {id} = req.params

    carsDb.getById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(500).json({ error: `There was an error retrieving the car information`})
        })
})

// original using knex basic GET /:id using knex dbConfig.js
// router.get('/:id', (req, res) => {

//     knex
//         .select('*')
//         .from('cars')
//         .where('id', '=', req.params.id)
//         .first()
//         .then(car => {
//             res.status(200).json(car);
//         })
//         .catch(err => {
//             res.status(500).json({ error: 'Failed to get the car from the database.'})
//         })
// })

// original using knex basic PUT /:id using knex dbConfig.js
// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const changes = req.body;

//     knex('cars')    
//         .where({ id: req.params.id })
//         .update(changes)
//         .then(count => {
//             res.status(200).json(count);
//         })
//         .catch(err => {
//             res.status(500).json({ error: 'Failed to update the car information in the database.'})
//         })
// })

// original using knex basic DELETE /:id using knex dbConfig.js
router.delete('/:id', (req, res) => {
    
    knex('cars')
        .where({ id: req.params.id })
        .del()
        .then(count => { // how many records/rows were deleted
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json({ error: `Failed to delete the car from the database.`})
        })
})

module.exports = router;