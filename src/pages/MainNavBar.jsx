import React from 'react'
import Home from './Home'
import About from './About'
import Registration from './Registration'
import AdminLogin from './AdminLogin'
import { Link, Route, Routes } from 'react-router-dom'
import './style.css'
export default function MainNavBar() {
  return (
    <div>
      <nav className="tag">
<Link to='/'>Home|</Link>
<Link to='about'>About|</Link>
<Link to='registration'>Registration|</Link>
<Link to='adminlogin'>Admin Login</Link>
</nav>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>

</Routes>

    </div>
  )
}
