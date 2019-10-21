exports.up = function (knex) {
    return knex.schema.createTable('listings', tbl => {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable();
        tbl
            .string('room_type', 128)
            .notNullable()
        tbl
            .integer('number_nights')
            .notNullable()
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
