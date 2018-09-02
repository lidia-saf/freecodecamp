import React from 'react';
import Break from './Break'
import Session from './Session'

const Pomodoro = () => {
  return (
    <div>
      <div id="clock-title">Pomodoro for freeCodeCamp</div>
      <div class="row">
        <Break />
        <Session />
      </div>
      <div id="timer-label">
        <div class="title" id="session-name">Session</div>
      </div>
    </div>
  ) 
}

export default Pomodoro;