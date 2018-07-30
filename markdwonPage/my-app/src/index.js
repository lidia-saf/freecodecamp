import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import AppLayout from './AppLayout'
import { reducer } from './reducer'

const initialState = [];

const store = createStore(reducer, initialState,
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <AppLayout />
    </Provider>,
    document.getElementById("root")
  )