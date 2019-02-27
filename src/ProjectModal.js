import React from 'react';
import {FiGlobe} from 'react-icons/fi';
import {GoMarkGithub} from 'react-icons/go';

const ProjectModal = props => {
  return (
    <div className="project-modal">
      <h3>{props.project.name}</h3>
      <div className="row">
        <div className="container">
          <p>Created using: {props.project.technologies}</p>
          <div>{props.project.description}</div>
          <a href={props.project.url}><FiGlobe></FiGlobe></a>
          <a href={props.project.github}><GoMarkGithub></GoMarkGithub></a>
        </div>
      </div>

    </div>
  )
}

export default ProjectModal;
