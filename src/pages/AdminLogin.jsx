import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const navigate=useNavigate()
  const [data,setData] =useState({
    username:'',
    password:''
  })
  const [error,setError]=useState('');
  const [loginSuccess, setLoginSuccess] = useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
    setError('')
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault()
    const credentials=JSON.parse(sessionStorage.getItem('credentials'))
    const defaultuname="gayathri"
    const defaultpass="gayathri"
    const validuname=credentials?.username||defaultuname
    const validpass=credentials?.password||defaultpass
    if(data.username==validuname&&data.password==validpass){
      alert("login successfull")
      sessionStorage.setItem('isAdmin',true)
      sessionStorage.setItem('username',data.username)
      setLoginSuccess(true)
     //window.location.href='/adminhome'
    navigate('/adminhome')
    }
    else{
      setError('login failed')
  
    }
     

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter username</label>
        <input type='text' name='username' value={data.username} onChange={handleChange}/><br/>
        <label>Enter password</label>
        <input type='password' name='password' value={data.password} onChange={handleChange}/><br/>
        <button type='submit'>Login</button>
        {error&&<p>{error}</p>}

      </form>
    </div>
  )
}
