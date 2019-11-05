
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.string('transmissionType', 255);
        tbl.string('titleStatus', 255);
    })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('transmissionType');
        tbl.dropColumn('titleStatus');
    })
};
