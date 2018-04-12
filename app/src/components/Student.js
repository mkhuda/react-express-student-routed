import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../styles/App.css';

class Student extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const { match: { params } } = this.props;
    const response = await fetch(`/student/${params.student_id}`, {
                        method: 'GET',
                        credentials: 'same-origin',
                      });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
  render() {
    
    return (
      <div>
      <section className="h-100">
      <header className="container h-100">
        <Link to="/students"><Button className="primary">Back</Button></Link>
        <div className="d-flex align-items-center justify-content-center h-100">
          {
            JSON.stringify(this.state.response)
          }
        </div>
      </header>
      </section>
      </div>
    );
  }
}

export default Student;
