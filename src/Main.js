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
        updateGenres(response.data.genres);
      }
    });
  }, []);


  function filterMoviesByGenres() {
    // selectedGenre=
    // console.log(newMovies)
    let tempFilteredList = [];
    while (filteredList.length > 0) {
      filteredList.pop();
    }
    newMovies.forEach((movie) => {
      movie.genre_ids.forEach((genre) => {
        console.log('Movie notfounded')
        if (parseInt(genre) === parseInt(document.getElementById('genres').value)) {
          tempFilteredList.push(movie);
        }
      });
      updateFilterList(tempFilteredList);

    });
  }

  let tempList = []
  genresList && genresList.map((genre) => {
    tempList.push(<option value={genre.id}>{genre.name}</option>);
  })

  return (
    <div>
      <Movie />
      <div>
        <label for="cars">Choose a Filter:</label>
        <select id="genres" onChange={filterMoviesByGenres}>
          {tempList}
        </select>

      </div>
      {/* View Filtered data */}

      <div className="mcontainer">
        {filteredList && filteredList.map((movie) =>
          <Featured key={movie.id} {...movie} />
        )}
      </div>

      <center><h3>Trending Movies</h3></center>
      {/* New Featured movies */}
      <div className="mcontainer">
        {newMovies && newMovies.map((movie) =>
          <Featured key={newMovies.id} {...movie} />
        )};
      </div>
    </div>
  )
};
export default Main;
