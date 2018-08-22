import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { volumeChange } from './actions';

const Volume = ({changeVolume, powerOff}) => {
  function handleChange (event) {
    if (powerOff) {
      return
    };
    console.log(event.target.value);
    changeVolume(event.target.value);
  }
  
  return (
    <div className="vol-slider-container">
      <input type="range" min="1" max="100" defaultValue="20" onInput={handleChange} className="volume-slider" id="volume" />
    </div>
  )
}

const mapStateToProps = state => {
    return {
      powerOff: state.powerOff
    }
}

const mapDispatchToProps = dispatch => {
    return {
      changeVolume: volume => {
        dispatch(volumeChange(volume))
        console.log(volume);
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Volume);