import React, {Component} from 'react';
import ProjectInfoButton from './ProjectInfoButton.js';
import Modal from 'react-responsive-modal';
import ProjectModal from './ProjectModal.js';

const projects = [
  {
    name: "Map My Beer Crawl",
    url: "https://mapmybeercrawl.firebaseapp.com",
    github: "https://github.com/lukemccrae/beercrawl",
    description: "An app to help you explore your urban environment. After getting your location, a dynamically generated beer crawl is generated along with a link to the directions in your maps application.",
    technologies: "Javascript, HTML5 / CSS3, Google Maps API, Bootstrap"
  },
  {
    name: "future projectt",
    url: "123",
    github: "yes",
    description: ""
  },
  {
    name: "future project",
    url: "123",
    github: "yes",
    description: ""
  }
]

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clickedProject: {}
    }
  }
  showInfo = (projectName) => {
    let selectedProject = projects.map(function(p) {return p.name}).indexOf(projectName)
    this.setState({clickedProject: projects[selectedProject]},
    () => {
      this.onOpenModal();
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="project container">
          <div id="project-buttons-wrapper" style={ { display: this.props.showProjects } }  className="col-centered row">
              {
                projects.map(p => {
                  return (
                    <div key={p.name}  className="col-md-3 col-md-offset-1">
                      <div className="project-wrapper">
                        <ProjectInfoButton project={p} showInfo={this.showInfo}></ProjectInfoButton>
                      </div>
                    </div>
                  )
                })
              }
        </div>
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
        >
          <ProjectModal project={this.state.clickedProject}></ProjectModal>
        </Modal>
      </div>
    );
  }
}

export default Project;
