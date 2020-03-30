import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Header from "../components/Header.js";

// API Keys
const defaultKey = "88b2bb448dff5786abe11bb1a3cfa4fe";

function Home(){
    // Assigning this list to the returned value of useState
    const [city, setCity] = useState("Honolulu");
    const [weatherData, setWeatherData] = useState({});
    const [cloudiness, setCloudiness] = useState(0);
    const [CurrentTemperature, setCurrentTemperature] = useState("");
    const [highTemperature, setHighTemperature] = useState("");
    const [lowTemperature, setLowTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [weatherType, setWeatherType] = useState("Clouds");

    let history = useHistory();

    // useEffect is a hook function that calls itself, once its variables change
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`)
          .then(function (response) {
            // Logs in the success
            console.log(response);
            setWeatherData(response.data); // ???
          })
          .catch(function (error) {
            // Logs in any error
            console.log(error);
          })
    }, []);

    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams (searchParams);
        let city = urlParams.get("city");
        if (city){
            setCity(city);
        }
    }, [history]
    );

    useEffect(() =>{
        if (weatherData.main){
            setCurrentTemperature(weatherData.main.temp);
            setHighTemperature(weatherData.main.temp_max);
            setLowTemperature(weatherData.main.temp_min);
            setCloudiness(weatherData.clouds.all / 200);

            setHumidity(weatherData.main.humidity);
            setWindSpeed(weatherData.wind.speed);

            setWeatherType(weatherData.weather[0].main);
        }
    }
    );

    return (
        <div className = "Home">
            <h1>{city}</h1>
            <div className = "WeatherInfo">
                <div className = "WeatherInfo_Image">
                    <img src = "" alt = ""></img>
                </div>
                <div className = "WeatherInfo_Data">

                    <div className = "CurrentTemperature">
                        <p className = "CurrentTemperatureLabel">Current Temperature</p>
                    </div>

                    <div className = "Icon">
                        <img src = "{`name`}.png"></img>
                    </div>

                    <div className = "OtherTemperatures">
                    </div>
                    
                    <div className = "Stats">
                    </div>
                </div>
                <div className = "CityDescription">
                </div>
            </div>
        </div>
    )
}

export default Home; // export the single functino called Home