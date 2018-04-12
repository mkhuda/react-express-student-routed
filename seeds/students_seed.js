
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {student_name: 'Erwina Wijaya', student_age: 25, student_bio: 'I am student'},
        {student_name: 'Marko Simix', student_age: 30, student_bio: 'I am student play futbol'},
        {student_name: 'Haudi Ebdillah', student_age: 24, student_bio: 'I am student too'}
      ]);
    });
};


// table.increments('student_id').primary();
// table.string('student_name');
// table.integer('student_age');
// table.string('student_bio');