import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css'

const AppLayout = ({ onChange, text }) => (
  <div className="container">
      <textarea 
      id="editor" 
      onChange={onChange} 
      className="edit_input" 
      type="text"
      >
        {text}
      </textarea>
  </div>
);

export default AppLayout;