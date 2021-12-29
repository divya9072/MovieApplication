import React, { useState } from 'react';
import './styles.css';
import Axios from 'axios';
import { Link } from "react-router-dom";

const Login = () => {
    const[username,setUseName]=useState('')
    const[passwordUser,setPasswordUser]=useState('')
    const[message,setMessage]=useState('')

    
    const loged=()=>{
        Axios.post('http://localhost:3001/api/login',{
            UserName:username,
            Password:passwordUser,
        }).then((res)=>{
            console.log(res)
            if(res.data.message)
            {
                console.log(res)
                setMessage(res.data.message)
            }
        });
    };
    return (
        <>
        <div className= "regdiv">
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <input type=" text" name='username'placeholder="Username" onChange={(e)=>{setUseName(e.target.value)}} />
        <input type="password" name='password' placeholder=" Password" onChange={(e)=>{setPasswordUser(e.target.value)}} />
        <button onClick={loged}>LOGIN</button><br></br>
        <div className='message'>
        {message}
        <p>Create your <bold>FREE</bold> Account&nbsp;&nbsp;&nbsp;&nbsp;<Link style={{ textDecoration: '', color:'blue' }} to="/sign">REGISTER</Link></p>
        </div>
        
        </div>
        </>
    )
}

export default Login
