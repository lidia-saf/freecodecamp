import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import AppLayout from './AppLayout'
import { reducer } from './reducer'

export const preloadedState = {
  text: "# Welcome to my React Markdown Previewer! \n \n## This is a sub-heading... \n ### And here's some other cool stuff: \n Heres some code, `<div></div>`, between 2 backticks. \n ``` \n// this is multi-line code: \nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') { \nreturn multiLineCode; \n} \n} \n``` \nYou can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \nThere's also [links](https://www.freecodecamp.com), and \n> Block Quotes! \n \nAnd if you want to get really crazy, even tables: \n Wild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here.... \nAnd here. | Okay. | I think we get it. \n \n- And of course there are lists. \n - Some are bulleted. \n  - With different indentation levels. \n   - That look like this. \n \n1. And there are numbererd lists too. \n1. Use just 1s if you want! \n1. But the list goes on... \n- Even if you use dashes or asterisks. \n* And last but not least, let's not forget embedded images: \n![React Logo w/ Text](https://goo.gl/Umyytc)"
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