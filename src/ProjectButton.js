import React from 'react'

const ProjectButton = props => {
  return (
    <button
      onClick={props.showProjects}
      className="info-button">Projects
    </button>
  )
}

export default ProjectButton;
