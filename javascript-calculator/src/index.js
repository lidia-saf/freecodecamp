import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { reducer } from './reducer';
import Calculator from './Container/Calculator';
import './Styles/index.css'

export const initialState = {
  input: "0",
  output: "0"};

const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

   ReactDOM.render(
    <Provider store={store}>
      <Calculator />
    </Provider>,
    document.getElementById("root")
  );
  