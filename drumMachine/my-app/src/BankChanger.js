import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { changeBank } from './actions';

class BankChanger extends React.Component {
    handleClick = (event) => {
    if (this.props.powerOff) {
      return
    }
    event.target.checked ? this.props.setBank(true) : this.props.setBank(false)
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
      powerOff: state.powerOff
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