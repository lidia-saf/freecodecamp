import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import { connect } from 'react-redux';
import marked from 'marked';

const Edited = ({text}) => {
    return(
    <div className="container">
        <div
        id="preview" 
        className="preview_output" 
        dangerouslySetInnerHTML={{__html: marked(text)}}
        >
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
      text: state.text
    }
  }

export default connect(mapStateToProps)(Edited);