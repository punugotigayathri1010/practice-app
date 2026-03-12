import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AdminHome from './AdminHome'
import AdminLogout from './AdminLogout'
import ApiDetails from './ApiDetails'
import ListOfRegisters from './ListOfRegisters'
import './admin.css'
export default function AdminNavBar() {
  return (
    <div>
      <nav className='tag'>
        <Link to='/adminhome'>Home</Link>
        <Link to='/adminlogout'>Logout</Link>
        <Link to='/adminapi'>API Details</Link>
        <Link to='/list'>Registers</Link>
        </nav>
        <Routes>
            <Route path='/adminhome' element={<AdminHome/>}/>
             <Route path='/adminlogout' element={<AdminLogout/>}/>
             <Route path='/adminapi' element={<ApiDetails/>}/>
             <Route path='/list' element={<ListOfRegisters/>}/>
        </Routes>
    </div>
  )
}
