import React, { Component } from 'react';
import {Container, Carousel} from 'react-bootstrap';
import MockUp1 from './mock-ups/comments.jpg';


class Comments extends Component {

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

        </Carousel>
        </Container>
    );
  }
}

export default Comments;