import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import AppLayout from './AppLayout'
import { reducer } from './reducer'

export const preloadedState = {
  text: "\n# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\nInline code: `<div></div>` \n```\nfunction anotherExample(a, b) {\n if (a == 'a' && b == 'b') { \nreturn a+b; \n} \n} \n``` \nYou can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \nThere's also [links](https://www.freecodecamp.com), and \r>blockquote \n \n>>Many blockquotes! \n \n- And of course there are lists. \r - Some are bulleted. \r  - With different indentation levels. \n   - That look like this.\n - Even if you use dashes or asterisks. \n* And last but not least, let's not forget embedded images:\n ![React Logo w/ Text](https://goo.gl/Umyytc)"
};

const store = createStore(
  reducer, preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

ReactDOM.render(
    <Provider store={store}>
      <AppLayout />
    </Provider>,
    document.getElementById("root")
  )