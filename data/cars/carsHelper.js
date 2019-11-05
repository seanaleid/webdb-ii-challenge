const db = require('../../dbConfig.js');

module.exports = {
    find,
    getById,
    insert
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