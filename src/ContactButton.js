import React from 'react'

const ContactButton = props => {
  return (
    <button
      onClick={props.showContact}
      className="info-button">Contact
    </button>
  )
}

export default ContactButton;
