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
      showAbout: 'block',
      projectButton: {
        backgroundColor: 'none',
        opacity: '1'
      },
      resumeButton: {
        backgroundColor: 'none',
        opacity: '1'
      },
      contactButton: {
        backgroundColor: 'none',
        opacity: '1'
      }
    }
  }
  showProjects = () => {
    if(this.state.showProjects == 'flex') {
      this.setState({
        showProjects: 'none',
        showAbout: 'block',
        projectButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        }
      })
    } else {
      this.setState({
        showProjects: 'flex',
        showContact: 'none',
        showResume: 'none',
        showAbout: 'none',
        projectButton: {
          backgroundColor: 'grey',
          opacity: '.9'
        },
        contactButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        },
        resumeButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        }
      })
    }
  }

  showContact = () => {
    if(this.state.showContact == 'block') {
      console.log('hi');
      this.setState({
        showContact: 'none',
        showAbout: 'block',
        contactButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        }
      })
    } else {
      this.setState({
        showProjects: 'none',
        showContact: 'block',
        showResume: 'none',
        showAbout: 'none',
        projectButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        },
        contactButton: {
          backgroundColor: 'grey',
          opacity: '.9'
        },
        resumeButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        }
      })
    }
  }

  showResume = () => {
    if(this.state.showResume == 'block') {
      this.setState({
        showResume: 'none',
        showAbout: 'block',
        resumeButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        }
      })
    } else {
      this.setState({
        showProjects: 'none',
        showContact: 'none',
        showResume: 'block',
        showAbout: 'none',
        projectButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        },
        contactButton: {
          backgroundColor: 'transparent',
          opacity: '1'
        },
        resumeButton: {
          backgroundColor: 'grey',
          opacity: '.9'
        }
      })
    }
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
                  <ProjectButton buttonStyle={this.state.projectButton} showProjects={this.showProjects}></ProjectButton>
                </div>
              </div>
              <div className="col-md info-border ">
                <div className="button-wrapper">
                  <ContactButton buttonStyle={this.state.contactButton} showContact={this.showContact}></ContactButton>
                </div>
              </div>
              <div className="info-border col-md">
                <div className="button-wrapper">
                  <ResumeButton buttonStyle={this.state.resumeButton} showResume={this.showResume}></ResumeButton>
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
                  <ProjectButton buttonStyle={this.state.projectButton} showProjects={this.showProjects}></ProjectButton>
                </div>
              </div>
              <div className="col-md info-border">
                <div className="button-wrapper">
                  <ContactButton buttonStyle={this.state.contactButton}  showContact={this.showContact}></ContactButton>
                </div>
              </div>
              <div className="info-border col-md">
                <div className="button-wrapper">
                  <ResumeButton buttonStyle={this.state.resumeButton} showResume={this.showResume}></ResumeButton>
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
