import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './pages.css';

import PropTypes from 'prop-types';


class Navigation extends Component {

  update= (ep) => {
    this.props.history.push(ep);
  }

  render() {
    return (
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link onClick={() => this.update('/home')}>home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => this.update('/team-c')}>team c</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => this.update('/sprints')}>sprints</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => this.update('/demo')}>demo</Nav.Link>
              </Nav.Item>
            </Nav>
    );
  }
}
Navigation.propTypes = {
  history: PropTypes.object
}

export default Navigation;
