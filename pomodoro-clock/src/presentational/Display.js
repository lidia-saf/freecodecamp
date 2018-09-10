import React from 'react';
import { connect } from 'react-redux';
import { resetValues, startTimer } from '../actions';



const Display = ({sessionLength, seconds, resetVals, startTime, timer}) => {
  return (
    <div>
      <div id="timer-label">
        <div className="title" id="session-name">Session</div>
        <div id="time-left" className="display-number">{sessionLength}:{seconds < 10 ? '0'+seconds : seconds}</div>
      </div>
      <button id="start_stop" onClick={startTime(!timer)}><div className="g"/></button>
      <button id="reset" type="button" onClick={resetVals}><img src="https://res.cloudinary.com/lidia-saf/image/upload/v1536499865/reload.svg" width="30px" height="30px"/></button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      sessionLength: state.session,
      seconds: state.seconds,
      timer: state.timer
    }
}

const mapDispatchToProps = dispatch => {
  return {
    resetVals: () => {dispatch(resetValues())},
    startTime: () => {dispatch(startTimer())}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Display);