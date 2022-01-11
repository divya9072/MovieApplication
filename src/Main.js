import React, { useState, useEffect } from 'react';
import Movie from "./Movie";
import Featured from "./Featuredmovie";
import axios from 'axios';
import Wish from './wishlistcomp';

const Featured_Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1";
const genre_api = "https://api.themoviedb.org/3/genre/movie/list?api_key=0294919b7060e3e3a5be90f5a15e9361&language=en-US";

let Main = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [genresList, updateGenres] = useState([]);
  const [filteredList, updateFilterList] = useState([]);
  const [maxWatchList, updateMaxWatchList] = useState([]);
  const [maxMovieWatchList, SetMaxMovieWatchList] = useState([]);
  const [tempMovie, setTempMovie] = useState([]);

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
        }
      });
    })
    updateFilterList(tempFilteredList);
  }
  let tempList = []
  genresList && genresList.map((genre, idx) => {
    tempList.push(<option key={idx} value={genre.id}>{genre.name}</option>);
  })

// wishlist
  useEffect(async () => {
    let maxMovieWatchList1 = [];
    const myaxiosdata = await axios.get('http://localhost:3001/api/maxWatchList')
    myaxiosdata?.data?.movies.forEach(async (element) => {
      let movieUrl = `https://api.themoviedb.org/3/movie/${element._id}?api_key=0294919b7060e3e3a5be90f5a15e9361`;
      const mydata = await axios.get(movieUrl)
      maxMovieWatchList1.push(mydata.data)
      if (maxMovieWatchList1.length > 4) {
        updateMaxWatchList([...maxMovieWatchList1])
      }
    })
  }, []);

  useEffect(async () => {
    let tempCount = [];
    await axios.get('http://localhost:3001/api/maxWatchList').then((res) => {
      console.log("count data", res.data.movies)
      tempCount.push(res.data.movies)
    })
    if (tempCount.length > 0) {
      setTempMovie(tempCount)
      console.log(tempMovie)
    }
  }, []);



  // count and genre

  
  return (
    <div>
      <Movie />
      <div className='genre'>
        <label>Choose a Filter :</label>
        <select id="genres" onChange={selectedgenre}>{tempList}</select>
      </div>
      <div className="mcontainer">
        {filteredList && filteredList.map((movie) =>
          <Featured  {...movie} />
        )}
      </div>

      {/* <h3>count</h3> */}
      {/* <div className='yolo'>
        {tempMovie && tempMovie.map((user)=>(
          {user}
        ))}
      </div> */}

      <div className='watchlist'>
      <h3>MOST WATCHLISTED MOVIES</h3>
      <div className="mcontainer">
        {maxWatchList?.map((movie, idx) =>
          <Wish key={idx} {...movie} />
        )}
      </div>
      </div>
      
      <div className='trenddiv'>
      <h3 className='trend'>TRENDING MOVIES</h3>
      <div className="mcontainer">
        {newMovies && newMovies.map((movie, idx) =>
          <Featured key={idx} isfromtop={true} {...movie} />
        )};
      </div>
    </div>
    </div>
  )
};
export default Main;


