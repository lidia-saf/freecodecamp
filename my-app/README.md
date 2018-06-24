#This is the weather application written in React for FreeCodeCamp challenge

The link for FreeCodeCamp challenge: [https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/show-the-local-weather/].

##Workings

Application contains three components:

1. Geolocation component

This child component gets the geolocation data from the user and provides it to the parent component Weather.

2. Weather component

This component uses the componentDidMount method to get the weather details (country, temperature, icon, weather description) from API and renders it to the user interface.

3. Temperature component

This component listens to the click event to render the temperature either in Celsius or in Fahrenheit.

##Dependencies

"dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-geolocated": "^2.4.0",
    "react-scripts": "1.1.4"
  }

##Screenshots

![Screenshot](https://github.com/lidia-saf/freecodecamp/blob/master/my-app/WeatherAppInReactScreenshot.png "Screenshot of the Weather App")
