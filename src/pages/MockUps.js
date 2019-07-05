import React, { Component } from 'react';
import {Container, Nav} from 'react-bootstrap';
import SkyLight from 'react-skylight';
import styles from './skylight-styles'
import Calendar from './features/calendar/Calendar';
import Account from './features/account/Account';
import Profile from './features/profile/Profile';
import Listings from './features/listings/Listings';
import Comments from './features/comments/Comments';


import './pages.css';


class MockUps extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      feature: "calendar"
    }; 

  }

  setFeature = (e) => {
    this.setState({feature: e});
  }

  render() {

    const feature = {
        "calendar": Calendar,
        "account": Account,
        "profile": Profile,
        "comments": Comments,
        "listings": Listings
    };

    const CurrentFeature = feature[this.state.feature];

    return (
        <Container className="mockups">
          <Nav className="justify-content-center mockups-nav">
              <Nav.Item>
                <Nav.Link onClick={(s) => this.setFeature("account", this.mockUps.show())}>Account</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={(s) => this.setFeature("profile", this.mockUps.show())}>Profile</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={(s) => this.setFeature("calendar", this.mockUps.show())}>Calendar</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={(s) => this.setFeature("listings", this.mockUps.show())}>Listings</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={(s) => this.setFeature("comments", this.mockUps.show())}>Comments</Nav.Link>
              </Nav.Item>
            </Nav>
        <SkyLight 
          hideOnOverlayClicked 
          ref={ref => this.mockUps= ref}
          dialogStyles={styles.dialogStyles}
        >
          <CurrentFeature/>
        </SkyLight>
        </Container>
    );
  }
}

export default MockUps;