import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import { connect } from 'react-redux';
import marked from 'marked';

const Edited = ({text}) => {
    return(
    <div className="container">
      <div className="preview_container">
       <div className="preview_head">
         <span>Preview</span>
         <img className="expand_toggle" width="15px" src="https://res.cloudinary.com/lidia-saf/image/upload/v1534354846/maximize.svg" alt=""/>
       </div>
        <div
        id="preview" 
        className="preview_output" 
        dangerouslySetInnerHTML={{__html: marked(text)}}
        >
        </div>
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