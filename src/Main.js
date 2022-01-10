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
  const [maxWatchList, updateMaxWatchList] = useState([]);
  const[maxMovieWatchList,SetMaxMovieWatchList]=useState([]);

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

  // max watchlist-------

  useEffect(async () => {
    let tempMaxWatchlist = [];
    let maxMovieWatchList1 = new Array(0);
    console.log('emptyarray',typeof maxMovieWatchList1)

    const myaxiosdata= await axios.get('http://localhost:3001/api/maxWatchList')
    // then(async (res) => {

      // console.log(res.data)
      // console.log('count')
      // console.log('myaxiosdata',myaxiosdata)
      // tempMaxWatchlist = res.data.movies;
       myaxiosdata?.data?.movies.forEach(async (element) => {
        let movieUrl = `https://api.themoviedb.org/3/movie/${element._id}?api_key=0294919b7060e3e3a5be90f5a15e9361`;
        const mydata =await axios.get(movieUrl)
        // const value= await mydata
          maxMovieWatchList1.push(mydata.data)
        
        console.log("max movie printed",mydata.data.budget)
        
      // })
      
    })
      updateMaxWatchList([...maxMovieWatchList1])
      console.log("my moviearray", maxMovieWatchList1)
 
  }, [maxWatchList.length]);
  console.log('myrerenderdata',typeof maxWatchList)

  maxWatchList?.map((movie) =>{
console.log('mymap',movie)
  })


  return (
    <div>
      <Movie />
      <center><h3>Most added watchlist movies</h3></center>
      {console.log("printed",maxWatchList)}
      <div className="mcontainer">
        {maxWatchList?.map((movie, idx) =>

          <Featured key={idx} {...movie} />
        )}
      </div>


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


