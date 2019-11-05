
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        // adds the primary key and automatically increments with .increments()
        table.increments();

        // adds notNullable columns
        table.integer('VIN').notNullable();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.float('mileage').notNullable();
        table.string('milageUnit').notNullable();
    })
};

exports.down = function(knex) {
  
};
