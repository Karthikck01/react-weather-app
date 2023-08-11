import { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import DisplayWeather from "./DisplayWeather";
import { API_KEY ,API_URL} from "../api/Api";

export default function WeatherApp() {

  const [ cityName, setCityName] = useState("")
  const [ currentWeather, setCurrentWeather ] = useState("")
  const getCityName = (data:any) => {
    
    setCityName(data)
  }

  useEffect(() => {
      const fetchWeatherResponce = fetch(`${API_URL}?q=${cityName}&units=metric&appid=${API_KEY}`)
      Promise.all([fetchWeatherResponce])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather(weatherResponse);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [cityName])
  
  return (
    <div>
      <div className="customContainer">
      <SearchBar getCityName={getCityName}/>
        {currentWeather && <DisplayWeather currentWeather={currentWeather} />}
      </div>
    </div>
  )
}
