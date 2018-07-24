import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import AppLayout from './AppLayout'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <AppLayout />
    </Provider>,
    document.getElementById("root")
  )