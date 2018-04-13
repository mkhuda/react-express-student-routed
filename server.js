const express = require('express');
const session = require('express-session');
const path = require('path');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const knex = require('./knex_config');
const auth = require('./auth');
const server = express();

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json());
server.use(session({ 
  secret: 'holaholahola',
  cookie: { maxAge: 1000000000 },
  resave: false,
  saveUninitialized: true
}));

server.use(express.static(path.join(__dirname, 'app/build')));

server.get('/students', (request, result) => {
  knex.select().table('students')
  .then(function(collection){
    result.json({
      error:false,
      data: collection
    })
  })
  .catch(function(err){
    result.status(500).json({
      error:true,
      data:{
        message:err.message
      }
    })
  })
});

server.get('/student/:student_id', (request, result) => {
  auth.saveSessionViews(request, result);
  knex('students').where('student_id', request.params.student_id).table('students')
  .then(function(collection){
    result.json({
      error:false,
      data: collection
    })
  })
  .catch(function(err){
    result.status(500).json({
      error:true,
      data:{
        message:err.message
      }
    })
  })
});

server.listen(port, () => console.log(`Student API listening to ${port}`));