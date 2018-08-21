import {ADD_EDITOR} from './actions/index'
import {preloadedState} from './index.js';

export const reducer = (state = preloadedState, action) => {
    switch (action.type) {
        case ADD_EDITOR:
          const newState = Object.assign({}, state, {text: action.text})
          return newState;
        default:
          return state;
    }
}
