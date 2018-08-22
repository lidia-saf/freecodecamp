import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import BankChanger from './BankChanger';
import Power from './Power';
import Volume from './Volume';
import { clearText } from './actions';

const Display = ({textField, powerOff, clearTextField}) => {
    let description;
    if (powerOff) {
      description = null;
    } else {
      description = textField;
    }

    setTimeout(() => {
      if (powerOff) {
        return
      }
      if (description.length > 3) {
        clearTextField("");
      }}, 10000
    );
    

    return (
      <div id="display-container">
        <Power />
        <div id="display" onChange={setTimeout}>
        {description}
        </div>
        <Volume />
        <BankChanger />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    playedAudio: state.playedAudio,
    powerOff: state.powerOff,
    textField: state.textField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearTextField: text => {
      dispatch(clearText(text));
      console.log(text);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);