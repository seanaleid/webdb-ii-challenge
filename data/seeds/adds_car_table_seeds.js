
exports.seed = function(knex, Promise) {
  
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1111111, make: 'Toyota', model: 'Camry', mileage: 0, milageUnit: 'km', transmissionType: 'manual', titleStatus: 'clean'},
        {VIN: 2222222, make: 'Ford', model: 'Focus', mileage: 2000, milageUnit: 'km', transmissionType: 'manual', titleStatus: 'salvage'},
        {VIN: 3333333, make: 'Mercedes', model: 'Benz C-Class', mileage: 5000, milageUnit: 'km', transmissionType: 'manual', titleStatus: 'salvage'}
      ]);
    });
};
