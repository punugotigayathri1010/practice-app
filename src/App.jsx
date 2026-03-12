import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainNavBar from './pages/MainNavBar'
import AdminNavBar from './admin/AdminNavBar'

function App() {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    const status = sessionStorage.getItem('isAdmin') === 'true'
    setAdmin(status)
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Lab exam</h2>
      <BrowserRouter>
        {admin ? <AdminNavBar /> : <MainNavBar />}
      </BrowserRouter>
    </div>
  )
}

export default App