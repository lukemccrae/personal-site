import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div style={ { display: this.props.showAbout } }  className="about">
        Hello, my name is Luke
      </div>
    );
  }
}

export default About;
