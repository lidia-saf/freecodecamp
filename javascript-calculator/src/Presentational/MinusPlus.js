import React from 'react';
import { connect } from 'react-redux';
import '../Styles/index.css';
import Equal from './Equal';
import { addInput } from '../actions';

const MinusPlus = ({refreshInput}) => {
  function handleClick (event) {
    console.log(event.target.value)
    refreshInput(event.target.value);
  }

  return (
    <div className="column-three">
      <button id="subtract" key="subtract" className="operator" value="-" onClick={event => handleClick(event)}>-</button>
      <button id="add" key="add" className="operator" value="+" onClick={event => handleClick(event)}>+</button>
      <Equal />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshInput: value => {
      dispatch(addInput(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinusPlus);