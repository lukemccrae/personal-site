import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div id="name-card">
        <h3>Luke McCrae</h3>
        <h4>Full Stack Developer</h4>
        <div class="container-fluid">
          <div class="row">
            <div class="info-border">
              <div class="button-wrapper">
                <button class="info-button">Projects</button>
            </div>
            </div>
            <div class="info-border">
              <div class="button-wrapper">
                <button class="info-button">About</button>
            </div>
            </div>
            <div class="info-border">
              <div class="button-wrapper">
                <button class="info-button">Resume</button>
            </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Name;
