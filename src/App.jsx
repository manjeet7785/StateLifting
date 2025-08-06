import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './component/Home'
import Navbar from './component/Navbar'
import Login from './component/Login'
import LogUp from './component/LogUp'
import { Routes, Route, Link } from 'react-router-dom';
import Details from './component/Details'
import Github from './component/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello </h1>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Navbar'>Navbar</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/LogUp'>LogUp</Link>
      </nav>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/LogUp' element={<LogUp />}>
          <Route path='Details' element={<Details />}></Route>
        </Route>
        <Route path='/Github/:name' element={<Github />}></Route>
      </Routes>
    </>
  )
}

export default App
