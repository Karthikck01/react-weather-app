import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from './components/WeatherApp';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
     <div className="app">
      <NavBar/>
      <div className="container">
      <WeatherApp/>
      </div>
     </div>
     
    </>
  )
}

export default App
