import React from 'react';
import { connect } from 'react-redux';
import { addInput, clearInput } from '../actions';
import '../Styles/index.css';

const AMultDiv = ({refreshInput, removeInput}) => {
  function handleClick (event) {
      if (event.target.value === "0") {
        removeInput(event.target.value);
      } else {
        console.log(event.target.value)
        refreshInput(event.target.value);
      }
  }

    return (
    <div className="row-three">
      <button id="clear" key="clear" className="ac" value="0" onClick={event => handleClick(event)}>AC</button>
      <button id="divide" key="divide" className="operator" value="/" onClick={event => handleClick(event)}>/</button>
      <button id="multiply" key="multiply" className="operator" value="*" onClick={event => handleClick(event)}>*</button>
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
      },
      removeInput: value => {
        dispatch(clearInput(value));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AMultDiv);