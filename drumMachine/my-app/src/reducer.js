import { initialState } from './index.js'
import { CHANGE_BANK, SHOW_NAME } from './actions'

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_BANK:
          return Object.assign({}, state, {bank: action.payload});
        case SHOW_NAME:
          return Object.assign({}, state, {playedAudio: state.bank1[action.payload].description})
        default: 
          return state;
    }
}