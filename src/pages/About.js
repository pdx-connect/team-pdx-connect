import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
        <Row className="about">
          <Col sm={2}></Col>
          <Col sm={8}>
            PSU Connect is a web application that connects the population of Portland State University
            through user created events, messaging and notifications, and interactive bulletins all in real time.
            This project was presented to Team C by sponsors Dr. Tankha, Hannah Lopez, and Dr. Kristin Tufte
            as an interdisciplinary capstone project between Anthropologie and Computer Science students.
            Hannah Lopez along with fellow Anthropologie students Emily Doll, Kaila Fontenot, Natalie Gardetto,
            and Cheyenne Hodgen provided their team research on how the body of PSU feels there is a lack of
            human connection on the commuter campus, and purposed a web application as a solution to drive
            interactions in a bustling environment.
          </Col>
          <Col sm={2}></Col>
        </Row>
    );
  }
}

export default About;