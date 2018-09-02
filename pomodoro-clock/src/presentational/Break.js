import React from 'react';
import { connect } from 'react-redux';


const Break = ({breakLength}) => {
  return (
    <div>
      <div id="break-label" className="title">Break Length</div>
      <div class="row">
      <button id="break-decrement" type="button"><i class="down" /></button>
      <div class="display-number" id="break-length">{breakLength}</div>
      <button id="break-increment" type="button"><i class="up" /></button>
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