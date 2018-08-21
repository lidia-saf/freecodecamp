import React from 'react';
import Pads from './Pads';
import Display from './Display';
import './index.css';

const MachineContainer = () => {
  return(
    <div id="drum-machine">
      <Pads />
      <Display />
    </div>
  )
};

export default MachineContainer;