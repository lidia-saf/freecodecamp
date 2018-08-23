import React from 'react';
import '../Styles/index.css';
import Numbers from '../Presentational/Numbers';
import MinusPlus from '../Presentational/MinusPlus';
import AMultDiv from '../Presentational/AMultDiv';
import Display from '../Presentational/Display';

const Calculator = () => {
  return (
    <div id="calculator-container">
      <div className="calc-row">
        <Display />
      </div>
      <div className="calc-row">
        <AMultDiv />
      </div>
      <div className="calc-row">
        <Numbers />
        <MinusPlus />
      </div>
    </div>
  )
}

export default Calculator;

