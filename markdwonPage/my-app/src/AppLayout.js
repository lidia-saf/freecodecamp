import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css'
import Edited from './Edited'

const AppLayout = ({ onChange }) => (
  <div className="container">
      <input onChange={onChange} className="edit_input" type="text" />
  <Edited />
  </div>
)

// class AppLayout extends Component {
  
//   render() {
//     return (
//       <div className="container">
//         <input className="edit_input" type="text" />
//       </div>

//     );
//   }
// }

export default AppLayout;