import React from 'react';
import { connect } from 'react-redux';
import './index.css';

class Pads extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    console.log(e.target.value);
    console.log(e.target.innerHTML);
    const node = this.myRef[e.target.value];
    console.log(node);
    node.play();
  }
  render() {
    this.myRef = [];
    console.log(this.props.bank1);
    console.log(this.props.letters)
    let drumPads = [];
    for (let i = 0; i < this.props.bank1.length; ++i) {
        drumPads.push(
          <button key={this.props.bank1[i].id} className="drum-pad" value={i} id={this.props.bank1[i].id} onClick={this.handleClick}>
            {this.props.letters[i]}
            <audio className="clip" ref={(ref) => {this.myRef.push(ref)}} src={this.props.bank1[i].link} id={this.props.letters[i]}></audio>
          </button>
        )
    }
    return (
      <div className="pads-container">
        {drumPads}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bank1: state.bank1,
    bank2: state.bank2,
    letters: state.letters
  }
}


export default connect(mapStateToProps)(Pads);