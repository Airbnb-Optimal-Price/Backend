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
    return db('listings')
        .join('users', 'users.id', 'listings.users_id')
        .select('listings.id', 'listings.label', 'listings.accomodates', 'listings.bathrooms', 'listings.bedrooms', 'listings.beds', 'listings.bed_type', 'listings.instant_bookable', 'listings.minimum_nights', 'listings.neighborhood', 'listings.room_type', 'listings.wifi')
        .where({ users_id: id });
}

function update(id, changes) {
    return db('users')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.find(id) : null));
}