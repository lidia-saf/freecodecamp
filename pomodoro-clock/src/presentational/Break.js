import React from 'react';
import { connect } from 'react-redux';
import { decrementBreak, incrementBreak } from '../actions';


const Break = ({breakLength, reduceBreak, addBreak}) => {
  return (
    <div>
      <div id="break-label" className="title">Break Length</div>
      <div className="row">
      <button id="break-decrement" type="button" onClick={reduceBreak} value="decrement"><i className="down" /></button>
      <div className="display-number" id="break-length">{breakLength}</div>
      <button id="break-increment" type="button" onClick={addBreak} value="increment"><i className="up" /></button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      breakLength: state.break
    }
}

const mapDispatchToProps = dispatch => {
  return {
    reduceBreak: () => {dispatch(decrementBreak())},
    addBreak: () => {dispatch(incrementBreak())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Break);