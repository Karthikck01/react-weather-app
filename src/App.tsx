import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from './components/WeatherApp';
import NavBar from "./components/NavBar";
import {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const getThemeData = (isDataMode:any) => {
    setDarkMode(isDataMode)
  } 

  return (
    <>
     <div className={darkMode ? "text-bg-dark app" : "text-bg-light app" }>
      <NavBar setDarkMode={getThemeData}/>
      <div className="container">
      <WeatherApp/>
      </div>
     </div>
    </>
  )
}

export default App
