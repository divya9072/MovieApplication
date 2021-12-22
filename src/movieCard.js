import {React,useState,useEffect} from "react";
import Header from "./Header";
import './styles.css';
import { Link } from "react-router-dom";
import Cast from "./Cast";

import { useParams } from "react-router-dom";
const Moviecard = () => {
    const [newMovies, setNewMovies] = useState([]);


    let param = useParams();
    let movieId = param.id;
    let movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0294919b7060e3e3a5be90f5a15e9361`;


    useEffect(() => {
        console.log(movieUrl);
        fetch(movieUrl).then((res) => res.json())
            .then((data) => {

                setNewMovies(data);
                console.log(newMovies);
            });
    }, []);
    return (
        <div className="">
            <Header />
            <div className="box">
                <img src={"https://image.tmdb.org/t/p/w500" + newMovies.poster_path} className="insideimg"></img>
                <div className="box1">
                    <p className='content'><strong>Name: </strong>{newMovies.title}</p>
                    <p className='content'><strong>Release_date: </strong>{newMovies.release_date}</p>
                    <p className='content'><strong>Overview: </strong>{newMovies.overview}</p>
                    <p className='content'><strong>Original-Language: </strong>{newMovies.original_language}</p>
                    <p className='content'><strong>Id: </strong>{newMovies.id}</p>
                    <p className='content'><strong>Popularity: </strong>{newMovies.popularity}</p>
                    <p className='content'><strong>Vote-Average: </strong>{newMovies.vote_average}</p>
                    <Cast/>
                </div>
            </div>
        </div>
    )
}

export default Moviecard;   
