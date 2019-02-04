import React, {Component} from 'react';
import ProjectButton from './ProjectButton.js';
import ContactButton from './ContactButton.js';
import ResumeButton from './ResumeButton.js';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: "hi",
      showProjects: false,
      showContact: false,
      showResume: false
    }
  }
  showProjects = () => {
    this.setState({
      showProjects: true
    })
    console.log('projects');
  }
  showContact = () => {
    this.setState({
      showContact: true
    })
    console.log('contact');
  }
  showResume = () => {
    this.setState({
      showResume: true
    })
    console.log('resume');
  }
  render() {
    return (
      <div>
        <p className="mobile-title responsive fixed-top">Luke McCrae - Full Stack Web Developer</p>
        <div id="name-card-small">
          <div className="container-fluid">
            <div className="row">
              <div className="info-border col-sm">
                <div className="button-wrapper">
                  <ProjectButton showProjects={this.showProjects}></ProjectButton>
                </div>
              </div>
              <div className="col-md info-border ">
                <div className="button-wrapper">
                  <ContactButton showContact={this.showContact}></ContactButton>
                </div>
              </div>
              <div className="info-border col-md">
                <div className="button-wrapper">
                  <ResumeButton showResume={this.showResume}></ResumeButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="name-card">
          <h3>Luke McCrae</h3>
          <h2>Full Stack Developer</h2>
          <div className="container-fluid">
            <div className="row">
              <div className="info-border col-sm">
                <div className="button-wrapper">
                  <ProjectButton showProjects={this.showProjects}></ProjectButton>
                </div>
              </div>
              <div className="col-md info-border ">
                <div className="button-wrapper">
                  <ContactButton showContact={this.showContact}></ContactButton>
                </div>
              </div>
              <div className="info-border col-md">
                <div className="button-wrapper">
                  <ResumeButton showResume={this.showResume}></ResumeButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;
