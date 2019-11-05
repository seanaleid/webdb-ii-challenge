
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.integer('price').notNullable();
      //foreign key that points to cars table
        tbl.integer('car_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cars');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')
};
