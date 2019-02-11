import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form';


class Contact extends Component {
  render() {
    return (
      <div>
        <div style={ { display: this.props.showContact } }  className="contact">
          <ReactContactForm className="contact" to="lukemccrae@gmail.com" />
        </div>
      </div>
    );
  }
}

export default Contact;
