import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { reducer } from './reducers/reducer'
import Pomodoro from './presentational/Pomodoro'

import './styles/index.css'

export const initialState = {
  break: 5,
  session: 25
};

const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

   ReactDOM.render(
    <Provider store={store}>
      <Pomodoro />
    </Provider>,
    document.getElementById("root")
  );
  