import React, {Component} from 'react';
import ProjectInfoButton from './ProjectInfoButton.js';

const projects = [
  {
    name: "Map My Beer Crawl",
    url: "123"
  },
  {
    name: "future projectt",
    url: "123"
  },
  {
    name: "future project",
    url: "123"
  }
]

class Project extends Component {
  constructor(props) {
    super(props)
  }
  showInfo = (p) => {
    console.log(p);
  }
  render() {
    return (
      <div className="project container">
          <div id="project-buttons-wrapper" style={ { display: this.props.showProjects } }  className="col-centered row">
              {
                projects.map(p => {
                  console.log(p);
                  return (
                    <div className="col-md-3 col-md-offset-1">
                      <div key={p.name} className="project-wrapper">
                        <ProjectInfoButton project={p} showInfo={this.showInfo}></ProjectInfoButton>

                      </div>
                    </div>

                  )
                })
              }
        </div>
      </div>
    );
  }
}

export default Project;
