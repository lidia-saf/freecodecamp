import React from 'react';
import Break from './Break';
import Display from './Display';
import Session from './Session';

const Pomodoro = () => {
  return (
    <div>
      <div id="clock-title">Pomodoro for freeCodeCamp</div>
      <div class="row">
        <Break />
        <Session />
      </div>
      <Display />
    </div>
  ) 
}

export default Pomodoro;