import React from "react";
import axios from "axios";
import Header from "./Header";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

const Search_Api = "https://api.themoviedb.org/3/search/movie?&api_key=0294919b7060e3e3a5be90f5a15e9361&query=";

let Movie = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchedItem, setsearchedItem] = React.useState("");


  React.useEffect(() => {
    handleOnSubmit(searchedItem);
  }, []);

  const handleOnSubmit = async () => {
    const res = await axios.get(Search_Api + searchedItem);
    setMovies(res.data.results);
    console.log(movies);
  };

  const handleOnChange = (event) => {
    setsearchedItem(event.target.value);
  };

  return (
    <div>
      <Header />
      <input
        className='search'
        type='search'
        placeholder='Search movie here..'
        value={searchedItem}
        onChange={handleOnChange}
      ></input>
      <button className="search--button" onClick={() => {
        handleOnSubmit()
      }}>Search</button>

      {movies && (
        <div className='movie-wrapper'>

          {movies.map((movie) => (
            <div className="insidewrapper">
              <Link style={{ textDecoration: 'none' }}

                to={`/Moviecard/${movie.id}`}
                key={movie.id} >
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="listimg"></img></Link>
              <p className='movie-list'><strong>Name: </strong>{movie.title}</p>
              <p className='movie-list'><strong>Overview: </strong>{movie.overview}</p>
              <p className='movie-list'><strong>Release_date: </strong>{movie.release_date}</p>

            </div>

          ))}

        </div>
      )}
    </div>
  );
}


export default Movie;
