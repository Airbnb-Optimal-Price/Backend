
exports.up = function (knex) {
    return knex.schema.createTable('location', tbl => {
        tbl.increments();

        tbl
            .string('location', 128)
            .notNullable()
            .unique();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('location');
};