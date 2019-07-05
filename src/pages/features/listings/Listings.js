import React, { Component } from 'react';
import {Container, Carousel} from 'react-bootstrap';
import MockUp1 from './mock-ups/listings.jpg';
import MockUp2 from './mock-ups/listing-creation.jpg';
import MockUp3 from './mock-ups/listings-my-listings.jpg';
import MockUp4 from './mock-ups/listings-category.jpg';
import MockUp5 from './mock-ups/listings-sub-category.jpg';
import MockUp6 from './mock-ups/listing-clicked.jpg';


class Listings extends Component {

  render() {
    let imgWidth = '100%';
    let imgHeight = 'auto';

    return (
        <Container className="sprint-mockups">
        <Carousel className="mock-ups"
            onSelect={this.handleSelect}
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

        </Carousel>
        </Container>
    );
  }
}

export default Listings;