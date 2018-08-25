import React from 'react';
import '../Styles/index.css';
import { produceResult } from '../actions';
import { connect } from 'react-redux';

const Equal = ({calculateResult}) => {
  function handleClick(event) {
    calculateResult(event.target.value);
  }
  return (
    <div>
      <button id="equals" className="equal" type="button" value="=" onClick={handleClick}>=</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    input: state.input
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateResult: value =>
      dispatch(produceResult(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equal);