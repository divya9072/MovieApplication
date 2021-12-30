import React, { useState, useEffect } from 'react';
import Movie from "./Movie";
import Featured from "./Featuredmovie";
import axios from 'axios';

const Featured_Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1 "

const genre_api = "https://api.themoviedb.org/3/genre/movie/list?api_key=0294919b7060e3e3a5be90f5a15e9361&language=en-US";

let Main = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [genresList, updateGenres] = useState([]);
  const [filteredList, updateFilterList] = useState([]);
  useEffect(() => {
    axios.get(Featured_Api).then((res) => {
      console.log(res.data);
      setNewMovies(res.data.results);
    })
  }, []);


  useEffect(() => {
    axios.get(genre_api).then((response) => {
      if (response.status === 200) {
        console.log(response.data.genres)
        updateGenres(response.data.genres);
      }
    });
  }, []);

  function selectedgenre(event) {
    console.log('myvalue=', typeof event.target.value);
    // setGenreId(event.target.value)
    let tempFilteredList = [];
    newMovies.forEach((movie) => {

      movie.genre_ids.forEach((genre) => {
        console.log('Movie not founded')
        if (Number(genre) === Number(event.target.value)) {
          tempFilteredList.push(movie);
        }
      });


    });
    updateFilterList(tempFilteredList);
  }

  let tempList = []
  genresList && genresList.map((genre, idx) => {
    tempList.push(<option key={idx} value={genre.id}>{genre.name}</option>);
  })

  return (
    <div>
      <Movie />

      {/* Filter */}
      <div>
        <label>Choose a Filter:</label>

        <select id="genres" onChange={selectedgenre}>
          {tempList}
        </select>

      </div>

      <div className="mcontainer">
        {filteredList && filteredList.map((movie, idx) =>
          <Featured key={idx} {...movie} />
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


