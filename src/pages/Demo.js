import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import YouTube from 'react-youtube';

class Demo extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
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

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    let imgWidth = this.state.height;
    let imgHeight = this.state.width/2;

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Container className="architecture">
        <YouTube
          videoId="1g55ExLOLkY"
          opts={opts}
          onReady={this._onReady}
        />
      </Container>

    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Demo;