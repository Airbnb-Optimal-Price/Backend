const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findUserListing,
    update
};

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function findUserListing(id) {
    return db('listings as l')
        .join('users as u', 'u.id', 'l.users_id')
        .select('l.id as Listing ID', 'l.name as Name', 'l.room_type as Room Type', 'l.number_nights as Min Stay', 'u.username as User')
        .where({ users_id: id });
}

function update(id, changes) {
    return db('users')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.find(id) : null));
}