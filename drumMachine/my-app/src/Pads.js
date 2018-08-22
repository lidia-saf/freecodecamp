import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { showName, showName2 } from './actions';

class Pads extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myButton = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (this.props.powerOff) {
      return
    }
    console.log(e.target.value);
    console.log(e.target.innerHTML);
    const node = this.myRef[e.target.value];
    console.log(node);
    node.volume = this.props.volume;
    this.props.bank ? this.props.showContext(e.target.value) : this.props.showContext2(e.target.value);
    node.play();
  }

  handleKeyPress = (e) => {
    if (this.props.powerOff) {
      return
    }
    e.preventDefault();
    console.log(e.keyCode);
    if (this.props.lowercaseLetters.indexOf(e.keyCode) >= 0) {
        let index = this.props.lowercaseLetters.indexOf(e.keyCode);
        console.log(this.myButton[index]);
        this.myButton[index].classList.remove("drum-pad");
        this.myButton[index].classList.add("drum-bad");
        console.log(this.myButton[index].classList);
        this.myRef[index].play();
        this.myRef[index].volume = this.props.volume;
        this.props.bank ? this.props.showContext(index) : this.props.showContext2(index);
      }
    }

    handleKeyUp = (e) => {
      if (this.props.powerOff) {
        return
      }
      e.preventDefault();
      if (this.props.lowercaseLetters.indexOf(e.keyCode) >= 0) {
        let index = this.props.lowercaseLetters.indexOf(e.keyCode);
        console.log(this.myButton[index]);
        this.myButton[index].classList.add("drum-pad");
        this.myButton[index].classList.remove("drum-bad");
        console.log(this.myButton[index].classList);
      }
    }

  componentDidMount() {
    console.log(this.myRef)
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  componentDidUpdate() {
    console.log(this.myRef);
    this.myRef = this.myRef.filter(element => {
      return element;
    });
    this.myButton = this.myButton.filter(element => {
      return element;
    });
    console.log(this.myRef);
    console.log(this.myButton);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this));
    document.removeEventListener("keyup", this.handleKeyUp.bind(this));
  }

  render() {
    this.myRef = [];
    this.myButton = [];
    console.log(this.props.bank1);
    console.log(this.props.letters);
    let bankChosen;
    this.props.bank ? bankChosen =  this.props.bank1 : bankChosen = this.props.bank2;
    console.log(bankChosen);
    let drumPads = [];
    for (let i = 0; i < bankChosen.length; ++i) {
        drumPads.push(
          <button key={bankChosen[i].id} className="drum-pad" ref={(ref) => {this.myButton.push(ref)}} value={i} id={bankChosen[i].id} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
            {this.props.letters[i]}
            <audio className="clip" ref={(ref) => {this.myRef.push(ref)}} value={bankChosen[i].description} src={bankChosen[i].link} id={this.props.letters[i]}></audio>
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
    letters: state.letters,
    powerOff: state.powerOff,
    volume: state.volume,
    lowercaseLetters: state.lowercaseLetters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showContext: value => {
      dispatch(showName(value))
      console.log(value);
    },
    showContext2: value => {
      dispatch(showName2(value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pads);