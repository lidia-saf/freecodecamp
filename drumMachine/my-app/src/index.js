import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { reducer } from './reducer'

export const initialState = {};

const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
