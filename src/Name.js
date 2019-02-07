import React, {Component} from 'react';
import ProjectButton from './ProjectButton.js';
import ContactButton from './ContactButton.js';
import ResumeButton from './ResumeButton.js';
import Project from './Project.js';
import About from './About.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: 'none',
      showContact: 'none',
      showResume: 'none',
      showAbout: 'block'
    }
  }
  showProjects = () => {
    this.setState({
      showProjects: 'flex',
      showContact: 'none',
      showResume: 'none',
      showAbout: 'none'
    })
  }
  showContact = () => {
    this.setState({
      showProjects: 'none',
      showContact: 'block',
      showResume: 'none',
      showAbout: 'none'
    })
  }
  showResume = () => {
    this.setState({
      showProjects: 'none',
      showContact: 'none',
      showResume: 'block',
      showAbout: 'none'
    })
  }
  showAbout = () => {
    this.setState({
      showProjects: 'none',
      showContact: 'none',
      showResume: 'none',
      showAbout: 'block'
    })
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
              <div className="col-md info-border">
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
        <Project showProjects={this.state.showProjects}></Project>
        <About showAbout={this.state.showAbout}></About>
        <Resume showResume={this.state.showResume}></Resume>
        <Contact showContact={this.state.showContact}></Contact>
      </div>
    );
  }
}

export default Name;
