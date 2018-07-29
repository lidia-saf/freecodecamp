export const ADD_EDITOR = 'ADD_EDITOR';
export const ADD_PREVIEW = 'ADD_PREVIEW';
export const TRANSPILE_TEXT = 'TRANSPILE_TEXT';

export const addEditor = text => ({
  type: ADD_EDITOR,
  text
});

export const addPrevoew = text => ({
  type: ADD_PREVIEW,
  text
})

export const transpileText = text => ({
  type: TRANSPILE_TEXT,
  text
})
