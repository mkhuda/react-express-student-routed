import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  
  render() {
    return (
      <section className="h-100">
      <header className="container h-100">
        <div className="d-flex align-items-center justify-content-center h-100">
          <Link to="/students"><Button className="primary">Go To Students</Button></Link>
        </div>
      </header>
      </section>
    );
  }
}

export default App;
