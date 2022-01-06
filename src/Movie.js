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
    backgroundColor: '#1A374D !important',
    borderRadius: '10px !important'
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
    MovieList.push(`${searchedItem}`)
    try{
    Axios.post('https://movie-backendapp.herokuapp.com/api/searchedmovie', {
      Email: localStorage.getItem("Email"),
      Moviename: MovieList
    }).then((res) => {
      console.log(res)
    })
    }
   catch(error){
     console.log(error,'error');
   }
  };

  const handleOnChange = (event) => {
    setsearchedItem(event.target.value);
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
      {/* <button onClick={handleOnSubmit}>Search</button> */}
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
              </div>

            </div>

          ))}

        </div>
      )}
    </div>
  );
}


export default Movie;