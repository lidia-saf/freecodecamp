export const ADD_INPUT = 'ADD_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const PRODUCE_RESULT = 'PRODUCE_RESULT';

export const addInput = value => {
  return {
    type: ADD_INPUT,
    payload: value
  }
}

export const clearInput = value => {
  return {
    type: CLEAR_INPUT,
    payload: value
  }
}

export const produceResult = () => {
  return {
    type: PRODUCE_RESULT
  }
}