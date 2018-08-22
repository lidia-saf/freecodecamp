import { initialState } from './index.js'
import { CHANGE_BANK, SHOW_NAME, SHOW_NAME2, POWER_OFF, VOLUME_CHANGE } from './actions'

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_BANK:
          return Object.assign({}, state, {bank: action.payload});
        case SHOW_NAME:
          return Object.assign({}, state, {playedAudio: state.bank1[action.payload].description});
        case SHOW_NAME2:
          return Object.assign({}, state, {playedAudio: state.bank2[action.payload].description});
        case POWER_OFF:
          return Object.assign({}, state, {powerOff: action.payload});
        case VOLUME_CHANGE:
          return Object.assign({}, state, {volume: action.payload / 100});
        default: 
          return state;
    }
}