import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css'

const Edited = ({ text }) => {

    return(
    <div className="container">
        <input id="preview" className="edit_input" type="text" value={text} />
      </div>
    )
}

export default Edited;