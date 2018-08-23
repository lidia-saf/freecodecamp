import React from 'react';
import '../Styles/index.css';
import Equal from './Equal';

const MinusPlus = () => {
  return (
    <div className="column-three">
      <button id="substract" key="substract" className="operator" value="-">-</button>
      <button id="add" key="add" className="operator" value="+">+</button>
      <Equal />
    </div>
  )
}

export default MinusPlus;