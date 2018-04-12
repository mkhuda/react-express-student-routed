
import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import App from './App';
import Students from './components/Students';
import Student from './components/Student';

const Routes = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App} />
      <Route path="/students" component={Students} />
      <Route path="/student/:student_id" component={Student} />
    </div>
  </BrowserRouter>
);

export default Routes;