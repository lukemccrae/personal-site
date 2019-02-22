import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div style={ { display: this.props.showAbout } }  className="about container">
          <div className="row">
            <div className="col-md-4">
              <img className="headshot" src={require('./headshot.jpg')} />
            </div>
            <div className="col-md-8">
              <p>Hi, I'm Luke. I'm passionate about building practical solutions through software.
                I have an affinity for map API's and outdoor challenges.</p>
            </div>
          </div>
        <img src={'https://imgur.com/Sxfyv8R'} alt='' className="img-responsive"/>
      </div>
    );
  }
}

export default About;
