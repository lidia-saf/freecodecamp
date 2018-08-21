import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import {changeBank} from './actions';

class BankChanger extends React.Component {
    handleClick = (event) => {
    event.target.checked ? this.props.setBank("bank1") : this.props.setBank("bank2")
    }

    render() {
      return (
        <div>
          <p className="title">Bank</p>
           <label className="switch" id="switch">
              <input type="checkbox" onClick={this.handleClick}/>
              <span className="slider"></span>
           </label>
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
      bank1: state.bank1,
      bank2: state.bank2,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setBank: bank => {
        dispatch(changeBank(bank))
        console.log(bank);
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BankChanger);