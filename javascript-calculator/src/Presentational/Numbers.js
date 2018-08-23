import React from 'react';
import '../Styles/index.css';

const Numbers = () => {
  return (
    <div className="numbers-container">
      <div className="row-three">
        <button id="nine" key="nine" className="number" value="9">9</button>
        <button id="eight" key="eight" className="number" value="8">8</button>
        <button id="seven" key="seven" className="number" value="7">7</button>
      </div>
      <div className="row-three">
        <button id="six" key="six" className="number" value="6">6</button>
        <button id="five" key="five" className="number" value="5">5</button>
        <button id="four" key="four" className="number" value="4">4</button>
      </div>
      <div className="row-three">
        <button id="three" key="three" className="number" value="3">3</button>
        <button id="two" key="two" className="number" value="2">2</button>
        <button id="one" key="one" className="number" value="1">1</button>
      </div>
      <div className="row-two">
        <button id="zero" key="zero" className="number" value="0">0</button>
        <button id="decimal" key="decimal" value="." className="number">.</button>
      </div>
    </div>
  )
}

export default Numbers;