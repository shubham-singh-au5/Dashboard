import React, { Component } from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import CurrentTemp from './components/CurrentTemp'
// import TempGraph from './components/TempGraph';
// import BarChart from './components/BarChart';
import './index.css';

class App extends Component {

  // Initial state
  state = {
    coords: {
      latitude: 19,
      longitude: 72
    },
    data: {},
    inputData: "",
  }

  componentDidMount() {

    if (navigator.geolocation) {

      // getting device location
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({
          coords: newCoords
        })

        Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=ae39fc61e2697bf5a81ab1beeeca0aa7`).then(res => {

          console.log(res);

          // Fetching data from API
          let weatherData = {
            temperature: res.data.current.temp,
            pressure: res.data.current.pressure,
            humidity: res.data.current.humidity,
            sunrise: res.data.current.sunrise,
            sunset: res.data.current.sunset,
            description: res.data.current.weather[0].description,
            icon: res.data.current.weather[0].icon,
            week: res.data.daily
          }

          this.setState({ data: weatherData })

        })

      })
    }
  }

  // Changing the Navbar state
  change = (value) => {
    this.setState({
      inputData: value
    })
  }

  changeWeather = (e) => {
    e.preventDefault();
    // Api call on SearchBar
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&appid=ae39fc61e2697bf5a81ab1beeeca0aa7`).then(res => {

      console.log(res);
      let weatherData = {
        temperature: res.data.main.temp,
        pressure: res.data.main.pressure,
        humidity: res.data.main.humidity,
        sunrise: res.data.main.sunrise,
        sunset: res.data.main.sunset,
        description: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        // week: res.data.daily
      }

      this.setState({ data: weatherData })
    })
  }



  render() {

    return (
      <div>
        < SearchBar changeWeather={this.changeWeather} changeRegion={this.change} />
        < Forecast weatherData={this.state.data} />
        < CurrentTemp weatherData={this.state.data} />
        {/* < TempGraph /> */}
      </div>
    )
  }
}

export default App;
