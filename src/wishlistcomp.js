import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";


const Wish=({id,title,poster_path,vote_average}) =>(

    <Link style={{ textDecoration: 'none'}}
    to={`/Moviecard/${id}`}
    key={id} >
    <div className="moviepage">
      <img src = {"https://image.tmdb.org/t/p/w500" + poster_path} alt={title}></img>
       <div className='movie-bottom'>
        <h3>{title}</h3>
        {/* <h3>{props.isfromtop?'hello':'hi'}</h3>
        <h3>count</h3> */}
        <span>{vote_average}</span>
        </div>
    </div>
  </Link>
);


export default Wish;