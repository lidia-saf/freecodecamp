const ADD_EDITOR = 'ADD_EDITOR';
const ADD_PREVIEW = 'ADD_PREVIEW';

export const addEditor = text => ({
  type: ADD_EDITOR,
  text
});

export const addPrevoew = text => ({
  type: ADD_PREVIEW,
  text
})

