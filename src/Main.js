import React, { useState, useEffect } from 'react';
import Movie from "./Movie";
import Featured from "./Featuredmovie";
import axios from 'axios';

const Featured_Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1 "

let Main = () => {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    axios.get(Featured_Api).then((res) => {
      console.log(res.data);
      setNewMovies(res.data.results);
    })
},[]);

  return (
    <div>
      <Movie />
      <div className="mcontainer">
        {newMovies && newMovies.map((movie) =>
          <Featured key={newMovies.id} {...movie} />
        )};
      </div>
    </div>
  )
};
export default Main;
