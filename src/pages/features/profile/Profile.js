import React, { Component } from 'react';
import {Container, Carousel} from 'react-bootstrap';
import MockUp1 from './mock-ups/profile.jpg';
import MockUp2 from './mock-ups/profile-events.jpg';
import MockUp3 from './mock-ups/profile-listings.jpg';
import MockUp4 from './mock-ups/profile-personal.jpg';
import MockUp5 from './mock-ups/search.jpg';
import MockUp6 from './mock-ups/profile-user.jpg';
import MockUp7 from './mock-ups/profile-direct-message.jpg';
import MockUp8 from './mock-ups/notifications.jpg';
import MockUp9 from './mock-ups/notifications-direct-messaging.jpg';
import MockUp10 from './mock-ups/message-redirect.jpg';
import MockUp11 from './mock-ups/message-selected.jpg';

class Profile extends Component {

  render() {
    let imgWidth = '100%';
    let imgHeight = 'auto';

    return (
        <Container className="sprint-mockups">
        <Carousel className="mock-ups"
            interval={false}
            indicators={false}
        >
            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp1 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp2 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp3 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp4 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp5 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp6 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp7 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp8 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp9 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp10 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp11 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
  }
}

export default Profile;