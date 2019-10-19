const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy
};

function find() {
    return db('location').select('location');
}

function findBy(filter) {
    return db('location')
        .where(filter);
}