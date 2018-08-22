import React from 'react';
import { connect } from 'react-redux';
import './index.css';

class Power extends React.Component {
    render() {
      return (
        <div>
          <p className="title">Power</p>
          <label className="switch" id="switch">
            <input type="checkbox" onClick={this.handleClick}/>
            <span className="slider"></span>
          </label>
        </div>
      )
    };
}

export default Power;