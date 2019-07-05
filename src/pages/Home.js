import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';

import About from './About';
import TeamC from './TeamC';
import Sprints from './Sprints';
import Demo from './Demo';
import Navigation from './Navigation';
import Footer from './Footer';


class Home extends Component {

  render() {

    const content = {
      "/": About,
      "/home": About,
      "/team-c": TeamC,
      "/sprints": Sprints,
      "/demo": Demo
    };
  
    let CurrentContent = content[this.props.history.location.pathname];

    return (
      <Container fluid className="home">

        <Row className="title">
          <Col md={12} className="development"><a href="https://test.pdx-connect.com/login" target="_blank" rel="noopener noreferrer"><h1>pdx connect</h1></a></Col>
        </Row>

        <Navigation history={this.props.history}/>

        <Row className="sub-title">
          <Col md={12}></Col>
        </Row>

        <CurrentContent/>

        <Row className="footer">
          <Col md={12}><Footer/></Col>
        </Row>

      </Container>
    );
  }
}

export default Home;
