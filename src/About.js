import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div style={ { display: this.props.showAbout } }  className="about">
        Hello, my name is Luke
        <img src={'https://imgur.com/Sxfyv8R'} alt='' className="img-responsive"/>
      </div>
    );
  }
}

export default About;
