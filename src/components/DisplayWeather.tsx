import { motion } from "framer-motion";
import BadRequest from "./BadRequest";
import {MAP_URL} from '../api/Api'

const DisplayWeather = (props:any) => {

    const weather = props.currentWeather;
    console.log(weather);
    
    console.log(weather.cod);
    
  return (
    <>
    {weather.cod == 200 ?
    <motion.div
    initial={{y:-200,opacity:0}}
    animate={{y:0, opacity:1}}
    className="container my-1 glass-box"
    >    
      {/* <a href="https://www.latlong.net/c/?lat=8.713050&long=77.641281" target="_blank">(8.713050, 77.641281)</a> */}
      
      <div className="d-flex justify-content-between align-items-center p-3">
            <div className="display-6 my-3">
              {weather.name}
              <div className="fs-6">
              &#8982;<a href={`${MAP_URL}?lat=${weather.coord.lat}&long=${weather.coord.lon}`} target="_blank" className="link">{`${weather.coord.lat} , ${weather.coord.lon}`}</a>
              </div>
            </div>
            <div className="display-1">
                {Math.round(weather.main.temp)}&deg;C
            </div>
      </div>

      <motion.div
      initial={{scale: .8}}
      animate={{scale: [1,1.1,1.1,1.2,1.1]}}
      transition={{delay: 2}}
      className="my-3 d-flex justify-content-center align-items-center flex-column"
      >
        <img src={`icons/${weather.weather[0].icon}.png`} alt="" className="img-fluid" />
          <div className="h3">
                {weather.weather[0].main}
                {/* {weather.weather[0].description} */}
          </div>
      </motion.div>
      
      <div className="row my-4 p-3">
        <div className="col d-flex justify-content-center align-items-center flex-column">
         <div className="value h2">
            {Math.round(weather.main.feels_like)}&deg;C
         </div>
          <div className="heading h4">
            FeelsLike 
         </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
         <div className="value h2">
           {weather.main.humidity} %
         </div>
          <div className="heading h4">
            Humidity 
         </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
         <div className="value h2">
         {weather.wind.speed} KMP
         </div>
          <div className="heading h4">
            Wind
         </div>
        </div>
      </div>
     
    </motion.div> : <BadRequest message={weather.message}/>}
    </>
  )
}

export default DisplayWeather;
