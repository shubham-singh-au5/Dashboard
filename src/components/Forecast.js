import React, { Component } from 'react';
import '../styles/Forecast.css';

class Forecast extends Component {

    render() {

        const { week } = this.props.weatherData;

        var weekday = new Array(14);
        weekday[0] = "Sund";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        weekday[7] = "Sun";
        weekday[8] = "Mon";
        weekday[9] = "Tue";
        weekday[10] = "Wed";
        weekday[11] = "Thu";
        weekday[12] = "Fri";
        weekday[13] = "Sat";

        return (
            <div className="row">
                {week && week.map((ele, i) => {
                    return (

                        // <div className="col-sm-2">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title"> {weekday[new Date().getDay() + i]}</h5>
                                    <p className="card-text"><strong>{(ele.temp.max - 273).toFixed(1)}°</strong> {(ele.temp.min - 273).toFixed(1)}°</p>
                                    <img className='img' src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`} alt = 'icon'/>
                                    <p className="card-text" id='season'>{ele.weather[0].description}</p>
                                </div>
                            </div>
                        // </div>
                    )
                })}
            </div>
        );
    }
}

export default Forecast;