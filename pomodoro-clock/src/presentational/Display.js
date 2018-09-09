import React from 'react';
import { connect } from 'react-redux';



const Display = ({sessionLength, seconds}) => {
  return (
    <div>
      <div id="timer-label">
        <div className="title" id="session-name">Session</div>
        <div id="time-left" className="display-number">{sessionLength}:{seconds}</div>
      </div>
      <button id="start_stop"><div className="g"/></button>
      <button id="reset" type="button"><img src="https://res.cloudinary.com/lidia-saf/image/upload/v1536499865/reload.svg" width="30px" height="30px"/></button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      sessionLength: state.session,
      seconds: state.seconds
    }
  }



export default connect(mapStateToProps)(Display);