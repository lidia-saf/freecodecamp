import { initialState } from "..";
import { DECREMENT_BREAK } from '../actions'

export function reducer(state=initialState, action) {
    switch (action.type) {
        case DECREMENT_BREAK:
        const newBreak = decremBreak(action.payload);
          return Object.assign({}, state, {break: newBreak});
        default:
            return state;
    }
}

function decremBreak(breakLength) {
    if (breakLength < 1) {
        return 1;
    } else {
        return breakLength-1;
    }
}