
exports.up = function(knex) {
  return knex.schema.table('users', users => {
    users.string('listing', 512)
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', users => {
      users.dropColumn('listing');
  })
};
