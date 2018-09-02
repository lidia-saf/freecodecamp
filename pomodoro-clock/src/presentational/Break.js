import React from 'react';
import { connect } from 'react-redux';


const Break = ({breakLength}) => {
  return (
    <div>
      <div id="break-label" className="title">Break Length</div>
      <div class="row">
      <button id="break-decrement" type="button"></button>
      <div class="display-number" id="break-length">{breakLength}</div>
      <button id="break-increment" type="button"></button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      breakLength: state.break
    }
  }

export default connect(mapStateToProps)(Break);