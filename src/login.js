import React, { useState } from 'react';
import './styles.css';
import Axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[username,setUseName]=useState('')
    const[passwordUser,setPasswordUser]=useState('')
    const[message,setMessage]=useState('')
    const[emailUser,setEmailUser]=useState('')
    const navigate = useNavigate()

    
    const loged=()=>{
        Axios.post('https://movie-backendapp.herokuapp.com/api/login',{
            Email:emailUser,
            UserName:username,
            Password:passwordUser,
        }).then((res)=>{
            console.log(res)
            if(res.data.message)
            {
                console.log(res)
                localStorage.setItem('Email',emailUser)
                setMessage(res.data.message)
                if(res.data.status=='ok')
            {
                navigate('/Main');
            }else{
                setMessage(res.data.message)   
            }
            }
            else{
                alert("Please Register Yourself")
               }
        });
    };
    return (
        <>
        <div className= "regdiv">
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <input type="email" name='email' placeholder=" Email@account" onChange={(e)=>{setEmailUser(e.target.value)}} />
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
