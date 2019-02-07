import React, {Component} from 'react';

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
    super(props);
  }
  render() {
    return (
      <div className="project container">
          <div style={ { display: this.props.showProjects } }  className="row">
            {
              projects.map(p => {
                return (
                  <div key={p.name} className="col-md-3 col-md-offset-1 col-centered project-wrapper">
                    <p className="project-name offset-center">{p.name}</p>
                    <a href={p.url}></a>
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
