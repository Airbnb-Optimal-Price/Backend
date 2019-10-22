exports.up = function (knex) {
    return knex.schema.createTable('listings', tbl => {
        tbl.increments();

        tbl
            .string('label', 128)
            .notNullable();
        tbl
            .integer('accomodates')
            .notNullable();
        tbl
            .float('bathrooms', 1, 1)
            .notNullable();
        tbl
            .integer('bedrooms')
            .notNullable();
        tbl
            .integer('beds')
            .notNullable();
        tbl
            .string('bed_type', 128)
            .notNullable();
        tbl
            .boolean('instant_bookable')
            .notNullable();
        tbl
            .integer('minimum_nights')
            .notNullable();
        tbl
            .string('neighborhood', 128)
            .notNullable();
        tbl
            .string('room_type', 128)
            .notNullable();
        tbl
            .boolean('wifi')
            .notNullable();
        tbl
            .integer('users_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('listings');
};
