import React from 'react'

const ProjectInfoButton = props => {
  console.log(props);
  return (
    <button
      className="project-info-button"
      onClick={props.showInfo("hi")}
      className="project-info-button">
      {props.project.name}
    </button>
  )
}

export default ProjectInfoButton;
