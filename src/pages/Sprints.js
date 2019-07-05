import React, { Component } from 'react';
import {Container, Carousel} from 'react-bootstrap';
import { Icon } from 'react-fa';
import placeholder from './imgs/placeholder.png';
import MockUps from './MockUps';

import './pages.css';

class Sprints extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
        index: 0,
        direction: null
    }; 

  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () =>{
    this.setState = { width: window.innerWidth, height: window.innerHeight }
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    let imgWidth = this.state.height;
    let imgHeight = this.state.width/2;

    const { index, direction } = this.state;

    return (
      <div>
        <Container className="sprints">
            <Carousel className="sub-architecture"
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
              interval={false}
              indicators={false}
            >

              <Carousel.Item>
                <img className="project" width={imgWidth} height={imgHeight} alt="img" src={ placeholder } />
                <Carousel.Caption>
                <Icon name="brand" className="fa fa-cube sprint-icons" size={'5x'} />
                  <h1 className="carouselTitle">Sprint 0</h1>
                  <h3 className="carouselSubTitle">Account</h3>
                  <h5 className="sprintDate">3/5/2019 - 3/12/2019</h5>
                  {/*
                  <ul className="requirements">
                    <li className="sprintsRequirementsTitle"><h5>Requirements</h5></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="deliverables">
                    <li className="sprintsDeliverablesTitle"><h5>Deliverables</h5></li>
                    <li></li>
                    <li></li>
                  </ul>
                  */}
                  <h5 className="deliverablesDate">Due: 3/14/2019</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="project" width={imgWidth} height={imgHeight} alt="img" src={ placeholder } />
                <Carousel.Caption>
                  <Icon name="brand" className="fa fa-cubes sprint-icons" size={'5x'} />
                  <h1 className="carouselTitle">Sprint 1</h1>
                  <h3 className="carouselSubTitle">Profile</h3>
                  <h5 className="sprintDate">4/2/2019 - 4/9/2019</h5>
                  {/*
                  <ul className="requirements">
                    <li className="sprintsRequirementsTitle"><h5>Requirements</h5></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="deliverables">
                    <li className="sprintsDeliverablesTitle"><h5>Deliverables</h5></li>
                    <li></li>
                    <li></li>
                  </ul>
                  */}
                  <h5 className="deliverablesDate">Due: 4/11/2019</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="project" width={imgWidth} height={imgHeight} alt="img" src={ placeholder } />
                <Carousel.Caption>
                  <Icon name="brand" className="fa fa-heart-o sprint-icons" size={'5x'} />
                  <h1 className="carouselTitle">Sprint 2</h1>
                  <h3 className="carouselSubTitle">Calendar</h3>
                  <h5 className="sprintDate">4/16/2019 - 4/23/2019</h5>
                  {/*
                  <ul className="requirements">
                    <li className="sprintsRequirementsTitle"><h5>Requirements</h5></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="deliverables">
                    <li className="sprintsDeliverablesTitle"><h5>Deliverables</h5></li>
                    <li></li>
                    <li></li>
                  </ul>
                  */}
                  <h5 className="deliverablesDate">Due: 4/25/2019</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="project" width={imgWidth} height={imgHeight} alt="img" src={ placeholder } />
                <Carousel.Caption>
                  <Icon name="brand" className="fa fa-heart sprint-icons" size={'5x'} />
                  <h1 className="carouselTitle">Sprint 3</h1>
                  <h3 className="carouselSubTitle">Listings</h3>
                  <h5 className="sprintDate">4/30/2019 - 5/7/2019</h5>
                  {/*
                  <ul className="requirements">
                    <li className="sprintsRequirementsTitle"><h5>Requirements</h5></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="deliverables">
                    <li className="sprintsDeliverablesTitle"><h5>Deliverables</h5></li>
                    <li></li>
                    <li></li>
                  </ul>
                  */}
                  <h5 className="deliverablesDate">Due: 5/9/2019</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="project" width={imgWidth} height={imgHeight} alt="img" src={ placeholder } />
                <Carousel.Caption>
                  <Icon name="brand" className="fa fa-heartbeat sprint-icons" size={'5x'} />
                  <h1 className="carouselTitle">Sprint 4</h1>
                  <h3 className="carouselSubTitle">Comments</h3>
                  <h5 className="sprintDate">5/14/2019 - 5/21/2019</h5>
                  {/*
                  <ul className="requirements">
                    <li className="sprintsRequirementsTitle"><h5>Requirements</h5></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="deliverables">
                    <li className="sprintsDeliverablesTitle"><h5>Deliverables</h5></li>
                    <li></li>
                    <li></li>
                  </ul>
                  */}
                  <h5 className="deliverablesDate">Due: 5/23/2019</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="project" width={imgWidth} height={imgHeight} alt="img" src={ placeholder } />
                <Carousel.Caption>
                  <Icon name="brand" className="fa fa-diamond sprint-icons" size={'5x'} />
                  <h1 className="carouselTitle">Sprint 5</h1>
                  <h3 className="carouselSubTitle">CSS</h3>
                  <h5 className="sprintDate">5/21/2019 - 5/28/2019</h5>
                  {/*
                  <ul className="requirements">
                    <li className="sprintsRequirementsTitle"><h5>Requirements</h5></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="deliverables">
                    <li className="sprintsDeliverablesTitle"><h5>Deliverables</h5></li>
                    <li></li>
                    <li></li>
                  </ul>
                  */}
                  <h5 className="deliverablesDate">Due: 5/30/2019</h5>
                </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
              <MockUps/>
        </Container>
      </div>

    );
  }
}

export default Sprints;