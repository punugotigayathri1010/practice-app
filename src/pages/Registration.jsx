import React, { useState } from 'react'

export default function Registration() {
    const[data,setData]=useState({
        name:'',
        email:'',
        contactno:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
   setData({
    ...data,
    [name]:value
   })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const existing=JSON.parse(localStorage.getItem('registrations'))||[]
        const newRegistration = {
            ...data,
            id:Math.floor(Math.random()*90000)*10000,
            registeredAt:new Date().toLocaleString()
        }
        existing.push(newRegistration)
        localStorage.setItem('registrations',JSON.stringify(existing))
        console.log("Registration succed")
        alert("Registration submitted successfully")
        setData({
            name:'',
        email:'',
        contactno:'' 
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
<label>Enter Name:</label>
<input type="text" name="name" value={data.name} onChange={handleChange} required/><br/>
<label>Enter email:</label>
<input type="email" name="email" value={data.email} onChange={handleChange} required/><br/>
<label>Enter phone no:</label>
<input type="tel" name="contactno" value={data.contactno} onChange={handleChange} required/><br/>
<input type="submit" value='submit'/>
        </form>
    </div>
  )
}
