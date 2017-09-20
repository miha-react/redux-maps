import axios from 'axios';
const API_KEY = '0fb11df907ecb93fca8ec5a8ada829d4';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("request:", request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}