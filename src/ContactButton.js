import React from 'react'

const ContactButton = props => {
  return (
    <button
      style={props.buttonStyle}
      onClick={props.showContact}
      className="info-button">Contact
    </button>
  )
}

export default ContactButton;
