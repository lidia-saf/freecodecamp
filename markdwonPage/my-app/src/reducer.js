import {ADD_EDITOR} from './actions/index'


export const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EDITOR:
          return [...state, {text: action.text}];
        default:
          return state;
    }
}
