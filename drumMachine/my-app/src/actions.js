export const CHANGE_BANK = "CHANGE_BANK";
const PLAY_CLIP = "PLAY_CLIP";

export const playClip = (event) => {
    event.persist();
    return {
        type: PLAY_CLIP,
        payload: event
    }
}