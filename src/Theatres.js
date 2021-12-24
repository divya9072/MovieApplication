import {React,useState,useEffect} from "react";
import Header from "./Header";
import Movie from "./Movie";
import './styles.css';
import Featured from "./Featuredmovie";
import axios from 'axios';

const Theatre_Api = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1"


const Theater = () => {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        axios.get(Theatre_Api).then((res) => {
          console.log(res.data);
          setNewMovies(res.data.results);
        })
    },[]);

    return (
        <div>
            <Header />
            <Movie />
            <div className="mcontainer">
                {newMovies && newMovies.map((movie) =>
                    <Featured key={newMovies.id} {...movie} />
                )};
            </div>
        </div>

    )
}
export default Theater;
