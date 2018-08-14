import {ADD_EDITOR} from './actions/index'
import {preloadedState} from './index.js';


export const reducer = (state = preloadedState, action) => {
    switch (action.type) {
        case ADD_EDITOR:
          return [...state, {text: action.text}];
        default:
          return preloadedState;
    }
}
