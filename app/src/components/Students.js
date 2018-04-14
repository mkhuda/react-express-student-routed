import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import StudentCard from './StudentCard';

class Students extends Component {
  state = {
    starting: true,
    response: {}
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ starting: false, response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/students', {
                        method: 'GET',
                        credentials: 'same-origin',
                      });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
  render() {

    const students = this.state.response.data;
    const starting = this.state.starting;
    
    return (
      <section className="h-100">
        <header className="container h-100">
          <Link to="/"><Button className="primary">Back</Button></Link>
            { 
              starting && <p>Loading</p>
            }
          <div className="d-flex align-items-center justify-content-center h-100">
            {
              students && students.map((student) => (
                <div key={`${student.student_id}`} className="d-flex flex-column App-flex-padding">
                <Link to={`/student/${student.student_id}`}>
                  <StudentCard studentName={student.student_name} studentAge={student.student_age} studentBio={student.student_bio} />
                </Link>
                </div>
              ))
            }
          </div>
        </header>
      </section>
    );
  }
}

export default Students;
