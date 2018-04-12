import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import '../styles/App.css';
import studentLogo from '../images/student.png';

class StudentCard extends Component {

  render() {
    const {studentName, studentAge, studentBio} = this.props;
    return (
      <Card>
        <CardBody>
        <CardTitle>
        <Container>
          <Row>
            <Col xs="4"><img src={studentLogo} alt={studentName} className="rounded-circle mw-100" /></Col>
            <Col xs="8" className="container student-name"><div className="d-flex align-items-center justify-content-center h-100">{studentName} ({studentAge})</div></Col>
          </Row>
        </Container>
        </CardTitle>
        <Container>
          <CardText className="text-left">{studentBio}</CardText>
        </Container>
        </CardBody>
        <CardFooter>---</CardFooter>
      </Card>
    );
  }
}

export default StudentCard;
