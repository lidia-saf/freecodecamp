import { initialState } from './index.js'
import { CHANGE_BANK } from './actions'

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_BANK:
          return state;
        default: 
          return state;
    }
}