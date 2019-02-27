import React, {Component} from 'react';

class ProjectInfoButton extends Component {
  constructor(props) {
    super(props);
  }
  displayProjectInfo = () => {
    let project = this.props.project.name;
    this.props.showInfo(project)
  }
  render() {
    return (
      <button
        className="project-info-button"
        onClick={this.displayProjectInfo}
        className="project-info-button">
        {this.props.project.name}
      </button>
    )
  }
}

export default ProjectInfoButton;
