// import { Component } from 'react'
import { useState } from 'react'
// import Comp1 from './components/Comp1/'
// import Comp2 from './components/Comp2/'

import { useRoutes, Link } from 'react-router-dom'
import router from './router'

function App() {
  const [count, setCount] = useState(0)

  const outlet = useRoutes(router)
  return (
    <div className="App">
      
      {/* <Link to='/home'>home</Link>||
      <Link to='/about'>about</Link>||
      <Link to='/user'>user</Link> */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
