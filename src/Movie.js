import { React, useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import "./styles.css";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles({
 btnStyle: {
   fontSize: '17px !important',
   backgroundColor: '#E4E3E3 !important',
   borderRadius: '10px !important',
   color:"black !important",
   border:'1px solid black !important'
 }
})
 
 
let Movie = () => {
 const classes = useStyles();
 
 const [movies, setMovies] = useState([]);
 const [searchedItem, setsearchedItem] = useState("");
 const MovieList=[];
 const Search_Api = `https://api.themoviedb.org/3/search/movie?&api_key=0294919b7060e3e3a5be90f5a15e9361&query=${searchedItem}`
 
 useEffect(() => {
   handleOnSubmit(searchedItem);
 }, []);
 
 const handleOnSubmit = async () => {
   console.log('myapi')
   // const res = await Axios.get(Search_Api + searchedItem);
   const res = await Axios.get( Search_Api);
   console.log('myapi'+`${Search_Api+searchedItem}`)
   setMovies(res.data.results);
   console.log(movies);
   console.log("Movies and Email:", localStorage.getItem("Email"), movies)
  
}
 
const handleOnChange = (event) => {
 setsearchedItem(event.target.value); 
};
 
const Watchlist=(movi)=>{
 try{
   MovieList.push(movi.title)
   // Axios.post('https://movie-backendapp.herokuapp.com/api/searchedmovie', {
     Axios.post('http://localhost:3001/api/watchlist', {
       Email:localStorage.getItem("Email"),
       movieId:movi.id,
       MovieName:movi.title,
   }).then((res) => {
      console.log(res)
   })
   }
  catch(error){
    console.log(error,'error');
  }
};
 
 
 
 return (
   <div>
     <Header />
     <div>
       <input
         className='search'
         type='search'
         placeholder='Search movie here..'
         value={searchedItem}
         onChange={handleOnChange}
       ></input>
     </div>
     <div className="search--button">
       <Button className={classes.btnStyle} variant="contained" onClick={handleOnSubmit}>Search</Button>
     </div>
     {movies && (
       <div className='movie-wrapper'>
 
         {movies.map((movie) => (
           <div className="inside">
             <div className="">
               <Link style={{ textDecoration: 'none' }}
 
                 to={`/Moviecard/${movie.id}`}
                 key={movie.id} >
                 <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="listimg"></img></Link>
             </div>
             <div className="insidediv">
               <p className='movie-list'><strong>Name: </strong>{movie.title}</p>
               <p className='movie-list'><strong>Overview: </strong>{movie.overview}</p>
               <p className='movie-list'><strong>Release_date: </strong>{movie.release_date}</p>
               <button className="watchbutton" onClick={()=>{
                 Watchlist(movie)
               }}>WatchList</button>
             </div>
 
           </div>
 
         ))}
 
       </div>
     )}
   </div>
 );
}
 
 
export default Movie;
 

