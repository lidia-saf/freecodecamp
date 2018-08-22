import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { powerOffToggle } from './actions';

class Power extends React.Component {
  handleClick = (event) => {
    event.target.checked ? this.props.powerOffFunc(true) : this.props.powerOffFunc(false);
  }
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

const mapStateToProps = state => {
    return {
      bank1: state.bank1,
      bank2: state.bank2,
      powerOff: state.powerOff
    }
}

const mapDispatchToProps = dispatch => {
    return {
      powerOffFunc: power => {
        dispatch(powerOffToggle(power))
        console.log(power);
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Power);