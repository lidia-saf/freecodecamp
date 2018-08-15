import React, { Component } from "react";
import ReactDOM from "react-dom";
import Edited from'./Edited';
import { connect } from 'react-redux';
import './index.css'
import { addEditor } from './actions/index'

const AppLayout = ({ addEditor, text }) => (
  <div className="container">
    <div className="editor_container">
      <div className="editor_head">
        Editor
        <div className="enlarge_symbol">&times;</div>
      </div>
      <textarea 
      id="editor" 
      onChange={e => {
        e.preventDefault()
        if (!e.target.value.trim()) {
            return
        }
        addEditor(e.target.value);
    }} 
      className="edit_input" 
      type="text"
      value={text}
      >
      </textarea>
    </div>
    <Edited />
  </div>
);

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = {
  addEditor
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);