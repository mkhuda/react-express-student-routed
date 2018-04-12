const knex = require('./knex_config');

module.exports = {
  
  saveSessionViews: (request, result) => {
    const studentId = request.params.student_id;
    if (request.session[studentId]) {
      console.log('User already viewed');
    } else {
      request.session[studentId] = 1;
      request.session.save();
      knex('students')
      .where('student_id', '=', request.params.student_id)
      .increment('session_views', 1)
      .then(function() {
        console.log('view saved');
      })
      .catch((e) => {console.log(e)});
    }
  }
  
};