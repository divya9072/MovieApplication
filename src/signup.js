import React, { useState } from 'react';
import './styles.css';
import Axios from 'axios';
import { Link } from "react-router-dom";

const Sign = () => {
    const [usernameUser, setUsenameUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    const [email, setEmail] = useState("")
    const[message,setMessage]=useState('');

    const handleSubmit = () => {
        Axios.post('http://localhost:3001/api/register', {
            UserName: usernameUser,
            Password: passwordUser,
            Email: email,
        }).then((res) => {
            console.log(res)
            if(res.data.message)
            {
                setMessage(res.data.message)
            }
        });
    };

    return (
        <>
            <div className="regdiv">
                <h1>CREATE YOUR ACCOUNT</h1>
                <input
                    type="email"
                    placeholder="Email@address.com"
                    onChange={(e) => {setEmail(e.target.value)}} />
                <input
                    type=" text"
                    name='username'
                    placeholder="Username"
                    onChange={(e) => { setUsenameUser(e.target.value) }} />
                <input
                    type="password"
                    name='password'
                    placeholder=" Password"
                    onChange={(e) => { setPasswordUser(e.target.value) }} />
                <button onClick={handleSubmit}>REGISTER</button><br></br>
                {message}
                <div className='message'>
                    <p>ALREADY HAVE AN ACCOUNT ?&nbsp;&nbsp;<Link style={{ textDecoration: '', color:'blue' }} to="/login">LOGIN</Link></p>
                </div>
            </div>
        </>
    )
}

export default Sign;
