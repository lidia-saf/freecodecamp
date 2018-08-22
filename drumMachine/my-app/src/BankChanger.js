import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { changeBank1, changeBank2 } from './actions';

class BankChanger extends React.Component {
    handleClick = (event) => {
    if (this.props.powerOff) {
      return
    }
    event.target.checked ? this.props.setBank1(true) : this.props.setBank2(false)
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
      powerOff: state.powerOff
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setBank1: bank => {
        dispatch(changeBank1(bank))
        console.log(bank);
      },
      setBank2: bank => {
        dispatch(changeBank2(bank))
        console.log(bank);
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankChanger);