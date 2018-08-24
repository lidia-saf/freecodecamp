import React from 'react';
import '../Styles/index.css';
import { connect } from 'react-redux';

const Display = ({input, output}) => {
  return (
    <div className="display">
      <p>{output}</p>
      <p id="display">{input}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    input: state.input,
    output: state.output
  }
}


export default connect(mapStateToProps)(Display);