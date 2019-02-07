import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div style={ { display: this.props.showContact } }  className="contact">
      Contact me!
      </div>
    );
  }
}

export default Contact;
