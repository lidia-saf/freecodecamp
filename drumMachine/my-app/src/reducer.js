import { initialState } from './index.js'
import { CHANGE_BANK1, CHANGE_BANK2, SHOW_NAME, SHOW_NAME2, POWER_OFF, VOLUME_CHANGE, SET_TEXT, CLEAR_TEXT } from './actions'

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_BANK1:
          return Object.assign({}, state, {bank: action.payload, textField: "Heater Kit 1"});
        case CHANGE_BANK2:
          return Object.assign({}, state, {bank: action.payload, textField: "Smooth Piano Kit"});
        case SET_TEXT:
          return Object.assign({}, state, {textField: action.payload});
        case SHOW_NAME:
          return Object.assign({}, state, {textField: state.bank1[action.payload].description});
        case SHOW_NAME2:
          return Object.assign({}, state, {textField: state.bank2[action.payload].description});
        case POWER_OFF:
          return Object.assign({}, state, {powerOff: action.payload, textField: ""});
        case VOLUME_CHANGE:
          return Object.assign({}, state, {volume: action.payload / 100, textField: ("Volume: " + action.payload)});
        case CLEAR_TEXT:
          return Object.assign({}, state, {textField: ""});
        default: 
          return state;
    }
}