import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { showName } from './actions';

class Pads extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      bankChosen: this.props.bank1
    }
  }
  handleClick = (e) => {
    console.log(e.target.value);
    console.log(e.target.innerHTML);
    if (this.myRef[e.target.value] != null) {
    const node = this.myRef[e.target.value];
    console.log(node);
    this.props.showContext(e.target.value);
    node.play();
    } else {
      let index = e.target.value + 9;
      console.log(index);
      this.myRef[index].play();
      this.props.showContext(e.target.value);
    }
  }
  componentDidMount() {
    console.log(this.myRef)
  }
  componentDidUpdate() {
    console.log(this.myRef);
    this.myRef = this.myRef.filter(element => {
      return element;
    });
    console.log(this.myRef);
  }

  render() {
    this.myRef = [];
    console.log(this.props.bank1);
    console.log(this.props.letters);
    let bankChosen;
    this.props.bank ? bankChosen =  this.props.bank1 : bankChosen = this.props.bank2;
    console.log(bankChosen);
    let drumPads = [];
    for (let i = 0; i < bankChosen.length; ++i) {
        drumPads.push(
          <button key={bankChosen[i].id} className="drum-pad" value={i} id={bankChosen[i].id} onClick={this.handleClick}>
            {this.props.letters[i]}
            <audio className="clip" ref={(ref) => {this.myRef.push(ref)}} src={bankChosen[i].link} id={this.props.letters[i]}></audio>
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
    bank: state.bank,
    bank1: state.bank1,
    bank2: state.bank2,
    letters: state.letters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showContext: value => {
      dispatch(showName(value))
      console.log(value);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pads);