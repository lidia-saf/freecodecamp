import React from 'react';
import '../Styles/index.css';
import { connect } from 'react-redux';

const Display = ({input, output}) => {
  return (
    <div id="display" className="display">
      <p>{input}</p>
      <p>{output}</p>
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