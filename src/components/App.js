import React, {Component} from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component{

render(){
        return(
            <div className="content">
                <h1>Weather App</h1>
                <SearchBar/>
                <WeatherList/>
            </div>
        )

        }



}