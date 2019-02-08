import React from 'react';

const ResumeButton = props => {
  return (
    <button
      style={props.buttonStyle}
      onClick={props.showResume}
      className="info-button">Resume

    </button>
  )
}

export default ResumeButton;
