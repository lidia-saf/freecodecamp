import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import BankChanger from './BankChanger';

const Display = ({playedAudio}) => {
    return (
      <div id="display-container">
        <BankChanger />
        <div id="display">
        {playedAudio}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    playedAudio: state.playedAudio
  }
}

export default connect(mapStateToProps)(Display);