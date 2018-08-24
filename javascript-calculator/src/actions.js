export const ADD_INPUT = 'ADD_INPUT';

export const addInput = value => {
  return {
    type: ADD_INPUT,
    payload: value
  }
}