import React from 'react'

const ResumeButton = props => {
  return (
    <button
      onClick={props.showResume}
      className="info-button">Resume
    </button>
  )
}

export default ResumeButton;
