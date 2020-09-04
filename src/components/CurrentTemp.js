import React, { Component } from 'react';
import '../styles/CurrentTemp.css';

class CurrentTemp extends Component {
    render() {

        const { temperature, icon, pressure, humidity} = this.props.weatherData;

        return (
            <div className='tempChart'>
                <h1> <strong> {Math.floor(temperature - 273)}°C </strong>  <img className='img' src={`http://openweathermap.org/img/wn/${icon}.png`} alt = 'icon'/></h1>
                <div>
                    <span className = 'pressure'>Pressure</span> <span className = 'humidity'> Humidity</span> <br />
                    <span className = 'pressureNum'>{pressure} hpa</span> <span className = 'humidityNum'> {humidity}% </span>
                </div>
            </div>
        );
    }
}

export default CurrentTemp;
