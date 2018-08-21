import React from 'react';
import { connect } from 'react-redux';
import './index.css';

const BankChanger = () => {
    return (
      <div>
         <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
         </label>
      </div>
    )
}

const mapStateToProps = state => {
    return {
      bank1: state.bank1,
      bank2: state.bank2,
    }
}

export default connect(mapStateToProps)(BankChanger);