import React, { Component } from 'react';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {isCelsius: true};
    this.handleClick = this.handleClick.bind(this);
}

  handleClick() {
    this.setState(prevState => ({
      isCelsius: !prevState.isCelsius
    }));

  }

  // var finalTemp = () => {
  //   this.state.isCelsius ? finalTemp = this.props.temperature : finalTemp = this.props.temperature * 1.8 + 32
  //   console.log(finalTemp)
  // }

  render() {
    let finalTemp;
    console.log("Temperature rendered")
    this.state.isCelsius ? finalTemp = Math.round(this.props.temperature) : finalTemp = Math.round(this.props.temperature * 1.8 + 32)
    return(
      <div className='temperature'>
        <p>{ finalTemp } <button className='buttonTemp' onClick={this.handleClick}>
        {this.state.isCelsius ? <p>°C </p> : <p>°F </p>}
      </button> </p>
      </div>
    );
  }
}

export default Temperature;