import { ADD_INPUT } from './actions';
import { initialState } from './index';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return Object.assign({}, state, {input: action.payload});
    default:
      return state;
  }
}