import React, { Component } from 'react';
import {Container, Carousel} from 'react-bootstrap';
import MockUp1 from './mock-ups/login.jpg';
import MockUp2 from './mock-ups/home.jpg';
import MockUp3 from './mock-ups/sidebar.jpg';
import MockUp4 from './mock-ups/password-reset-0.jpg';
import MockUp5 from './mock-ups/password-reset-1.jpg';
import MockUp6 from './mock-ups/register.jpg';
import MockUp7 from './mock-ups/register-tos.jpg';
import MockUp8 from './mock-ups/register-confirm.jpg';
import MockUp9 from './mock-ups/oobe-1.jpg';
import MockUp10 from './mock-ups/oobe-2.jpg';
import MockUp11 from './mock-ups/oobe-3.jpg';
import MockUp12 from './mock-ups/oobe-4.jpg';


class Account extends Component {

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

            <Carousel.Item>
                <img className="req" width={imgWidth} height={imgHeight} alt="img" src={ MockUp12 } onClick={() => this.mockUps.show()}/>
            </Carousel.Item>

        </Carousel>
        </Container>
    );
  }
}

export default Account;