import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ListOfRegisters() {
    const [registration,setRegistration]=useState([])
    useEffect(() => {
        
        const store=JSON.parse(localStorage.getItem('registrations'))||[]
        setRegistration(store)
    }, []);
  return (
    <div>
        <h2>List of registers</h2>
        {
            registration.length==0?<b>No registers found</b>:
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email </th>
                    <th>Contact no</th>
                    <th>Registered at</th>
                </tr>
                {
                    registration.map((user)=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contactno}</td>
                            <td>{user.registeredAt}</td>
                        </tr>
                    )

                    )
                }

            </table>
        }
    </div>
  )
}
