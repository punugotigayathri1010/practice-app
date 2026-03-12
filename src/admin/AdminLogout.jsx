import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogout() {
    const navigate=useNavigate()
    useEffect(() => {
  
        sessionStorage.removeItem('isAdmin')
        sessionStorage.removeItem('username')
      // window.location.href='/'
    navigate('/')
    }, [navigate]);
  return (
    <div>
      <h2></h2>
    </div>
  )
}
