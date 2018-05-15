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


  render() {
    let finalTemp;
    this.state.isCelsius ? finalTemp = this.props.temperature : finalTemp = this.props.temperature * 1.8 + 32
    console.log(finalTemp)
    return(
      <div className='temperature'>
        <p>{ finalTemp } <button onClick={this.handleClick}>
        {this.state.isCelsius ? <p> °C </p> : <p> °F </p>}
      </button> </p>
      </div>
    );
  }  
}

export default Temperature;