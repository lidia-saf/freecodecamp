import React from 'react';
import { connect } from 'react-redux';
import './index.css';

const Display = ({playedAudio}) => {
    return (
      <div id="display">
      {playedAudio}
      </div>
    )
}

const mapStateToProps = state => {
  return {
    playedAudio: state.playedAudio
  }
}

export default connect(mapStateToProps)(Display);