import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import BankChanger from './BankChanger';
import Power from './Power';

const Display = ({playedAudio}) => {
    return (
      <div id="display-container">
        <Power />
        <div id="display">
        {playedAudio}
        </div>
        <BankChanger />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    playedAudio: state.playedAudio
  }
}

export default connect(mapStateToProps)(Display);