import {React,useState,useEffect} from "react";
import Header from "./Header";
import Movie from "./Movie";
import './styles.css';
import Featured from "./Featuredmovie";
import axios from 'axios';

const kids_Api = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1 "


const Moviekids = () => {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        axios.get(kids_Api).then((res) => {
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
export default Moviekids;
