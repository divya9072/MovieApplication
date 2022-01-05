import React from "react";
import './styles.css';
import { Link } from "react-router-dom";


export default function Header() {
    
    const logout=()=>{
        localStorage.setItem('Email',null)
    }

    return (
        <header className="header">
            <img
                src="https://img.icons8.com/ios-filled/50/000000/movie.png"
                className="header--image"
            />
            <h2 className="header--title">MovieHub</h2>
            <h4 className="header--project">
                <ul>
                <li><Link style={{ textDecoration: 'none', color:'white' }} to="/Main">Home</Link></li>
                <li><Link style={{ textDecoration: 'none', color:'white' }} to="/Moviekids">Moviekids</Link></li>
                <li><Link style={{ textDecoration: 'none', color:'white' }} to="/Theatres">Theaters</Link></li>
                <li><Link style={{ textDecoration: 'none', color:'white' }} to="/login">Login</Link></li>
                {/* <li><Link style={{ textDecoration: 'none', color:'white' }} to="/sign">Register</Link></li> */}
                <li><button><Link style={{ textDecoration: 'none' }} to="/Login" onClick={logout}>Logout</Link></button></li>
            </ul>
            </h4>
        </header>
    )
}

