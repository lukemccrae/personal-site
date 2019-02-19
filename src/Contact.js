import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form';


class Contact extends Component {
  render() {
    return (
      <div>
        <div style={ { display: this.props.showContact } }  className="contact">
          <div className="container">
            <h3>I can be contacted by <a href="tel:1-719-639-4921">phone</a> or <a type="email" href="mailto:lukemccrae@gmail.com">email</a>.</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
