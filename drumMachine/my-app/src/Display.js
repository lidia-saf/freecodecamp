import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import BankChanger from './BankChanger';
import Power from './Power';
import Volume from './Volume';

const Display = ({textField, powerOff}) => {
    let description;
    if (powerOff) {
      description = null;
    } else {
      description = textField;
    }
    return (
      <div id="display-container">
        <Power />
        <div id="display">
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

export default connect(mapStateToProps)(Display);