import React, { useState } from 'react'
import './User.css'
import { Userfn } from '../Comp';
function User() {
    const [user,setUser] = useState("");
    const [gender,setGender] = useState("")
    const addUser=()=>{
       const userData={
            name:user,
            gender:gender,
        }
    Userfn(userData)
    // console.log(gender,user)
    }
  return (
    <div className='container'>
        <h1>New User</h1>
        <input type='text' placeholder='Eneter Name' onChange={(event)=>{setUser(event.target.value)}}/>
        <div className='radio'>
        <input type='radio' name='gender' value="male" onChange={(event)=>{setGender(event.target.value)}}/>male
        <input type='radio' name='gender' value="female"  onChange={(event)=>{setGender(event.target.value)}}/>female
        </div>
        <button style={{marginTop:"10px"}} onClick={addUser}>Add user</button>
    </div>
  )
}

export default User