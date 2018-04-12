exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('students', (table) => {
      table.increments('student_id').primary();
      table.string('student_name');
      table.integer('student_age');
      table.string('student_bio');
      table.integer('session_views').defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('students')
    ]);
};