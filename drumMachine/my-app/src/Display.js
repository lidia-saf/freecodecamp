import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import BankChanger from './BankChanger';
import Power from './Power';

const Display = ({playedAudio, powerOff}) => {
    let description;
    if (powerOff) {
      description = null;
    } else {
      description = playedAudio;
    }
    return (
      <div id="display-container">
        <Power />
        <div id="display">
        {description}
        </div>
        <BankChanger />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    playedAudio: state.playedAudio,
    powerOff: state.powerOff
  }
}

export default connect(mapStateToProps)(Display);