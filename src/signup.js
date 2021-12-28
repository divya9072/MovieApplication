import React, { useState } from 'react';
import './styles.css';
import Axios from 'axios';

const Sign = () => {
    const[usernameUser,setUsenameUser]=useState('')
    const[passwordUser,setPasswordUser]=useState('')

    const handleSubmit=()=>{
        Axios.post('http://localhost:3001/api/register',{
            UserName:usernameUser,
            Password:passwordUser,
        }).then((res)=>{
            console.log(res)
        });
    };

    return (
        <>
        <div className= "regdiv">
        <h1>CREATE YOUR ACCOUNT</h1>
        <input type=" text" name='username'placeholder="Username. .." onChange={(e)=>{setUsenameUser(e.target.value)}} />
        <input type="password" name='password' placeholder=" Password..." onChange={(e)=>{setPasswordUser(e.target.value)}} />
        <button onClick={handleSubmit}>REGISTER</button>
        </div>
        </>
            )
}

export default Sign;
