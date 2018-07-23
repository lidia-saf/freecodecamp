import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppLayout from './AppLayout'



ReactDOM.render(
    <Provider store={store}>
      <AppLayout />
    </Provider>,
    document.getElementById("root")
  )