import React, { Component } from 'react';
import Temperature from './Temperature'

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      country: "",
      temperature: "",
      description: "",
      icon: "",
      altToIcon: "",
    };

  }

  componentDidMount() {
    let URL = "https://fcc-weather-api.glitch.me/api/current?lon=" + this.props.long + "&lat=" + this.props.lat
    console.log(URL)
    fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({location: data.name})
      this.setState({country: data.sys.country})
      this.setState({temperature: data.main.temp})
      this.setState({description: data.weather[0].main})
      this.setState({icon: data.weather[0].icon})
      this.setState({altToIcon: data.weather[0].description})
      console.log(data)

    })
    .catch(error => console.log('parsing failed', error))
  }



    render() {
    return (
      <div className="container1">
        <div className="container2">
          {this.state.location}, {this.state.country}
        </div>
        <div className="container3">
          <Temperature temperature = {this.state.temperature} />
        </div>
        <div className="container4">
          {this.state.description}
        </div>
        <img className="iconImage" src={this.state.icon} alt={this.state.altToIcon} />
      </div>
    );
  }
}


export default Weather;