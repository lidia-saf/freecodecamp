import { initialState } from "..";
import { DECREMENT_BREAK, 
         INCREMENT_BREAK, 
         DECREMENT_SESSION, 
         INCREMENT_SESSION, 
         RESET_VALUES, 
         START_TIMER } from '../actions'

export function reducer(state=initialState, action) {
    switch (action.type) {
        case DECREMENT_BREAK:
          const newState = state.break - 1;
          if (newState < 1) {
              return {...state, break: 1};
          } else {
              return {...state, break: state.break - 1};
          }
        case INCREMENT_BREAK:
          if (state.break + 1 >=60) {
            return {...state, break: 60}
          } else {
            return {...state, break: state.break + 1}
          }
        case DECREMENT_SESSION:
          const neState = state.session - 1;
          if (neState < 1) {
            return {...state, session: 1};
          } else {
          return {...state, session: state.session - 1}
         }
        case INCREMENT_SESSION:
          const newnState = state.session + 1;
          if (newnState >= 60) {
            return {...state, session: 60};
          } else {
          return {...state, session: state.session + 1};
          }
        case START_TIMER:
          const newSeconds = goTime(state.seconds, state.timer);
          return {...state, seconds: newSeconds}
        case RESET_VALUES:
          return {...state, session: 25, break: 5}
        default:
            return state;
    }
}

function goTime(seconds, timer) {
    console.log(seconds)
    const initial = seconds;
    let time;
    if (timer) {
      time = setInterval(function(seconds) {
        if (seconds === "00") {
            seconds = 59;
            console.log(seconds);
        }
        console.log(seconds--);
        return initial;
    }, 1000)
    } else {
        clearInterval(time)
    }
}