const NavBar = () => {
  
  return (
    <div className='container px-4 py-1 d-flex justify-content-between align-items-center'>
        <div className="h2">
            Weather API
        </div>
        <div className="text-light">
          <a href="https://openweathermap.org/">API DOCS</a>
        </div>
    </div>
  )
}

export default NavBar