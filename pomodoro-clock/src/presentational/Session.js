import React from 'react';
import { connect } from 'react-redux';

const Session = ({sessionLength}) => {
  return (
    <div>
      <div id="session-label" class="title">Session Length</div>
      <div class="row">
      <button id="session-decrement" type="button"></button>
      <div class="display-number" id="session-length">{sessionLength}</div>
      <button id="session-increment" type="button"></button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      sessionLength: state.session
    }
  }

export default connect(mapStateToProps)(Session);