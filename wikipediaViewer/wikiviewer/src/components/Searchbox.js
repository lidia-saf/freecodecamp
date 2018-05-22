import React, { Component } from 'react';

class Searchbox extends Component {
  
  handleClick(){
    console.log("test");
  }
  render() {
  return (
    <div>
      <br />
      <br />
      <div className="searchOff" onClick={this.handleClick}>
        <div style={{width: "20px", borderTop: "3px solid #ADFF2F", transform: "rotate(36deg)", left:"60%", top: "35%"}} />
      </div>
      <h2 className="Search-article">
      Click icon to search
      </h2>
    </div>
  );
  }
}

export default Searchbox;
