import React from 'react'
import '../styles/SearchBar.css'

export default function SearchBar(props) {
    return (
        <div className='main'>
            <form onSubmit={(e) => {props.changeWeather(e) }}>
                <i className="fa fa-map-marker fa-2x icon"></i>
                <input type='text' id='input1' placeholder='Search..' onChange={(e) => props.changeRegion(e.target.value)} />
                <i className="fa fa-search fa-2x icon"></i>
            </form>
        </div>
    )
}
