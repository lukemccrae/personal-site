import React from 'react'

const ProjectButton = props => {
  return (
    <button
      style={props.buttonStyle}
      onClick={props.showProjects}
      className="info-button">Projects
    </button>
  )
}

export default ProjectButton;
