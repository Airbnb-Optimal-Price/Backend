const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update
};

function find() {
    return db('listings').select('id', 'label', 'accomodates', 'bathrooms', 'bedrooms', 'beds', 'bed_type', 'instant_bookable', 'minimum_nights', 'neighborhood', 'room_type', 'wifi', 'users_id');
}

function findBy(filter) {
    return db('listings').where(filter);
}

async function add(listing) {
    const [id] = await db('listings').insert(listing);

    return findById(id);
}

function findById(id) {
    return db('listings')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('listings')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.find(id) : null));
}