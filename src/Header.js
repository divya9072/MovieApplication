import React from "react";
import './styles.css';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="header">
            <img
                src="https://img.icons8.com/ios-filled/50/000000/movie.png"
                className="header--image"
            />
            <h2 className="header--title">MovieHub</h2>
            <h4 className="header--project"><ul>
                <li ><Link style={{ textDecoration: 'none', color:'white' }} to="/">Home</Link></li>
                <li><Link style={{ textDecoration: 'none', color:'white' }} to="/Moviekids">Moviekids</Link></li>
                <li>Dramas</li>
                <li>Theaters</li>
            </ul></h4>
        </header>
    )
}

