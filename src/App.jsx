import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registration from './pages/Registration'
import { BrowserRouter } from 'react-router-dom'
import MainNavBar from './pages/MainNavBar'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
<h2 style={{textAlign:'center'}}>Lab exam </h2>
<BrowserRouter>
<MainNavBar/>
</BrowserRouter>
   </div>
  )
}

export default App
