import { useState } from "react";
import SearchBox from "./searchbox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelsLike:20,
        temp: 33,
        tempMin: 33,
        tempMax: 33, 
        humidity: 80,
        weather: "rainy"
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    };

    return (
        <div style={{ textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}