import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particle extends Component{

    render(){
        return (
            <Particles params={{
                "particles": {
                  "number": {
                    "value": 700,
                    "density": {
                      "enable": true,
                      "value_area": 1000
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.665416005259192,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 4,
                      "size_min": 0.3,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 600
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 100,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 572.5144346724483,
                      "size": 0,
                      "duration": 4.222801503966995,
                      "opacity": 0.47100478313478017,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 50,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
            />
        );
    };

}
export default Particle;
