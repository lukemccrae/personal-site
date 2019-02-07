import React, {Component} from 'react';

class Resume extends Component {
  render() {
    return (
      <div style={ { display: this.props.showResume } }   className="resume">
      Hi this is my resume
      </div>
    );
  }
}

export default Resume;
