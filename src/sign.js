import React, { useState, useEffect } from 'react';
import Header from './Header';
import './styles.css';

const Sign = () => {
  

    return (
        <>
        <Header/>
        <div className="App">
            <div className=" Sign Up">
                <h1>Sign Up</h1>
                <label>Usename</label><br/>
                <input type=" text" /><br/>
                <label>Password</label><br/>
                <input type="password" /><br/>
                <button> Register </button>
            </div>
            </div>
            </>
            )
}

export default Sign;
