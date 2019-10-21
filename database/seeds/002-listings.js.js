
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, name: 'New York Apartment', room_type: 'condo', number_nights: 3, users_id: 2},
        {id: 2, name: 'Miami House', room_type: 'house', number_nights: 4, users_id: 2},
      ]);
    });
};
