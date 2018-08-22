export const CHANGE_BANK1 = "CHANGE_BANK1";
export const CHANGE_BANK2 = "CHANGE_BANK2";
export const SHOW_NAME = "SHOW_NAME";
export const SHOW_NAME2 = "SHOW_NAME2";
export const POWER_OFF = "POWER_OFF";
export const VOLUME_CHANGE = "VOLUME_CHANGE";
export const SET_TEXT = "SET_TEXT";
export const CLEAR_TEXT = "CLEAR_TEXT";

export const setText = (text) => {
    return {
        type: SET_TEXT,
        payload: text
    }
}

export const showName = (value) => {
    return {
        type: SHOW_NAME,
        payload: value
    }
}

export const showName2 = (value) => {
    return {
        type: SHOW_NAME2,
        payload: value
    }
}

export const changeBank1 = (bank) => {
    return {
        type: CHANGE_BANK1,
        payload: bank
    }
}

export const changeBank2 = (bank) => {
    return {
        type: CHANGE_BANK2,
        payload: bank
    }
}

export const powerOffToggle = (power) => {
    return {
        type: POWER_OFF,
        payload: power
    }
}

export const volumeChange = (volume) => {
    return {
        type: VOLUME_CHANGE,
        payload: volume
    }
}

export const clearText = (text) => {
    return {
        type: CLEAR_TEXT,
        payload: text
    }
}