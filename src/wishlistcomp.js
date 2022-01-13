import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
 
 
const Wish=(props) =>{
 
 var movieData = props.movie;
// console.log(props.)
 return (
 
   <Link style={{ textDecoration: 'none'}}
   to={`/Moviecard/${movieData.id}`}
   key={movieData.id} >
   <div className="moviepage">
     <img src = {"https://image.tmdb.org/t/p/w500" + movieData.poster_path} alt={movieData.title}></img>
      <div className='movie-bottom'>
       <h3>{movieData.title}</h3>
       <span>{movieData.vote_average}</span>
       </div>
       {/* <div className="mb"> <p>Count: {props.tempMovieCount}</p>
       </div> */}
   </div>
 </Link>
);
};
 
 
export default Wish;
 

