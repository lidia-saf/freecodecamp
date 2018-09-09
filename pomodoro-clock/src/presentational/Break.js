import React from 'react';
import { connect } from 'react-redux';
import { decrementBreak } from '../actions';


const Break = ({breakLength, reduceBreak}) => {
  function handleClick(e) {
    if (e.target.value == "decrement") {
      reduceBreak(breakLength-1);
    }
  };

  return (
    <div>
      <div id="break-label" className="title">Break Length</div>
      <div className="row">
      <button id="break-decrement" type="button" onClick={(e)=> handleClick(e)} value="decrement"><i className="down" /></button>
      <div className="display-number" id="break-length">{breakLength}</div>
      <button id="break-increment" type="button" onClick={(e)=>handleClick(e)} value="increment"><i className="up" /></button>
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
    reduceBreak: (newBreak) => {dispatch(decrementBreak(newBreak))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Break);