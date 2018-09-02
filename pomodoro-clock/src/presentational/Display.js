import React from 'react';
import { connect } from 'react-redux';


const Display = ({sessionLength, seconds}) => {
  return (
    <div>
      <div id="timer-label">
        <div class="title" id="session-name">Session</div>
        <div id="time-left" class="display-number">{sessionLength}:{seconds}</div>
      </div>
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