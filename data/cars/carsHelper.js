const db = require('../../dbConfig.js');

module.exports = {
    find,
    getById,
    insert,
    update, 
    remove,
};

// find helper
async function find(query = {}) {
    const { limit = 10, sortby = 'id', sortdir = 'desc'} = query;

    let rows = await db('cars')
        .orderBy(sortby, sortdir)
        .limit(limit);

    return rows;
}

// findById helper
function getById(id) {
    return db('cars')
    .where({ id })
    .first();
}

// insert helper
function insert(car) {
    return db('cars')
    .insert(car)
    .then(ids => {
        return getById(ids[0]);
    });
}

function update(id, changes) {
    return db('cars')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('cars')
        .where('id', id)
        .del()
}