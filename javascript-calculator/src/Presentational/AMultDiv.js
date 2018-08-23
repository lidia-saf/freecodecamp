import React from 'react';
import '../Styles/index.css';

const AMultDiv = () => {
  return (
    <div className="row-three">
      <button id="clear" key="clear" className="ac" value="">AC</button>
      <button id="divide" key="divide" className="operator" value="/">/</button>
      <button id="multiply" key="multiply" className="operator" value="*">*</button>
    </div>
  )
}

export default AMultDiv;