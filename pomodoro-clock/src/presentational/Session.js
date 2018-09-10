import React from 'react';
import { connect } from 'react-redux';
import { incrementSession, decrementSession } from '../actions'

const Session = ({sessionLength, reduceSession, addSession}) => {
  return (
    <div>
      <div id="session-label" className="title">Session Length</div>
      <div class="row">
        <button id="session-decrement" type="button" onClick={reduceSession}><i className="down" /></button>
        <div className="display-number" id="session-length">{sessionLength}</div>
        <button id="session-increment" type="button" onClick={addSession}><i className="up" /></button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      sessionLength: state.session
    }
}

const mapDispatchToProps = dispatch => {
  return {
    reduceSession: () => {dispatch(decrementSession())},
    addSession: () => {dispatch(incrementSession())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);