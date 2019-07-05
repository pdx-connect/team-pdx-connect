import React, { Component } from 'react';
import {Container, Carousel} from 'react-bootstrap';
import MockUp1 from './mock-ups/calendar.jpg';
import MockUp2 from './mock-ups/calendar-create-event.jpg';
import MockUp3 from './mock-ups/calendar-event-preclick.jpg';
import MockUp4 from './mock-ups/calendar-click-event.jpg';
import MockUp5 from './mock-ups/calendar-events.jpg';
import MockUp6 from './mock-ups/calendar-event-created.jpg';
import MockUp7 from './mock-ups/calendar-notification.jpg';
import MockUp8 from './mock-ups/search-events.jpg';


class Calendar extends Component {

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
        </Carousel>
        </Container>
    );
  }
}

export default Calendar;