import React, {Component} from 'react';
import createReactClass from 'react';



const projects = [
  {
    name: "Map My Beer Crawl",
    url: "123"
  },
  {
    name: "future project",
    url: "123"
  },
  {
    name: "future project",
    url: "123"
  }
]

class Project extends Component {
  render() {
    return (
      <div className="project container">
          <div className="row">
            {
              projects.map(p => {
                return (
                  <div className="col-md-4 col-centered project-wrapper">
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
