export const CHANGE_BANK = "CHANGE_BANK";
export const SHOW_NAME = "SHOW_NAME";

export const showName = (value) => {
    return {
        type: SHOW_NAME,
        payload: value
    }
}