import React from 'react';
import { connect } from 'react-redux';
import { addInput } from '../actions'
import '../Styles/index.css';

const Numbers = ({refreshInput}) => {
  function handleClick (event) {
    console.log(event.target.value)
    refreshInput(event.target.value);
  }

  return (
    <div className="numbers-container">
      <div className="row-three">
        <button id="nine" key="nine" className="number" value="9" onClick={event => handleClick(event)}>9</button>
        <button id="eight" key="eight" className="number" value="8" onClick={event => handleClick(event)}>8</button>
        <button id="seven" key="seven" className="number" value="7" onClick={event => handleClick(event)}>7</button>
      </div>
      <div className="row-three">
        <button id="six" key="six" className="number" value="6" onClick={event => handleClick(event)}>6</button>
        <button id="five" key="five" className="number" value="5" onClick={event => handleClick(event)}>5</button>
        <button id="four" key="four" className="number" value="4" onClick={event => handleClick(event)}>4</button>
      </div>
      <div className="row-three">
        <button id="three" key="three" className="number" value="3" onClick={event => handleClick(event)}>3</button>
        <button id="two" key="two" className="number" value="2" onClick={event => handleClick(event)}>2</button>
        <button id="one" key="one" className="number" value="1" onClick={event => handleClick(event)}>1</button>
      </div>
      <div className="row-two">
        <button id="zero" key="zero" className="number" value="0" onClick={event => handleClick(event)}>0</button>
        <button id="decimal" key="decimal" value="." className="number" onClick={event => handleClick(event)}>.</button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);