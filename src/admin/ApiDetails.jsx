import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './admin.css'
export default function ApiDetails() {
    const [object,setObject]=useState([])
    const[error,setError]=useState('')
    
    const display=async ()=>
    {
        try{
        const wait=await axios.get("https://jsonplaceholder.typicode.com/users")
        setObject(wait.data)
    }

catch(error){
    setError(error.message)
}
    }
    useEffect(() => {
        
       display()
    }, []);
  return (
    <div>
        <h2>API details</h2>
        {error?<b>{error}</b>:object.length==0?<b>Loading...</b>:
        <table>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
             </tr>
             {
                object.map((p,i)=>(
                    <tr key={i}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td>{p.address.city}</td>
                    </tr>
                )
            )
             }
        </table>
        }
    </div>
  )
}
