import React, { useState, useEffect } from 'react';
import Movie from "./Movie";
import Featured from "./Featuredmovie";
import axios from 'axios';
 
const Featured_Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1";
const genre_api = "https://api.themoviedb.org/3/genre/movie/list?api_key=0294919b7060e3e3a5be90f5a15e9361&language=en-US";
 
let Main = () => {
 const [newMovies, setNewMovies] = useState([]);
 const [genresList, updateGenres] = useState([]);
 const [filteredList, updateFilterList] = useState([]);
//  const [maxWatchList, updateMaxWatchList] = useState([]);
 
 useEffect(() => {
   axios.get(Featured_Api).then((res) => {
       setNewMovies(res.data.results);
     })
 }, []);
 
 useEffect(() => {
   axios.get(genre_api).then((response) => {
       updateGenres(response.data.genres);
     });
 }, []);
 
 function selectedgenre(event) {
   let tempFilteredList = [];
   newMovies.filter((element, _,) => {
     element.genre_ids.find((genre) => {
       if (Number(genre) === Number(event.target.value)) {
         tempFilteredList.push(element);
       }});
   })
   updateFilterList(tempFilteredList);
 }
  let tempList = []
   genresList && genresList.map((genre, idx) => {
   tempList.push(<option key={idx} value={genre.id}>{genre.name}</option>);
 })
 
// max watchlist-------

useEffect(async()=>{
  let tempMaxWatchlist=[];
  await axios.get('http://localhost:3001/api/maxWatchList').then(async(res) => {
  
         console.log(res.data)
         tempMaxWatchlist = res.data.movies;
         console.log(tempMaxWatchlist)
})
    },[]);
  
 
 
 return (
   <div>
     <Movie />
{/*  
 
     <center><h3>Most added watchlist movies</h3></center>
     */}
    
 
     <div>
       <label>Choose a Filter:</label>
       <select id="genres" onChange={selectedgenre}>{tempList}</select>
     </div>
     <div className="mcontainer">
       {filteredList && filteredList.map((movie) =>
         <Featured  {...movie} />
       )}
     </div>
     <center><h3>Trending Movies</h3></center>
     <div className="mcontainer">
       {newMovies && newMovies.map((movie, idx) =>
         <Featured key={idx} {...movie} />
       )};
     </div>
   </div>
 )
};
export default Main;
 
 
