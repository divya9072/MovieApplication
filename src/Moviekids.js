import {React,useState,useEffect} from "react";
import Header from "./Header";
import Movie from "./Movie";
import './styles.css';
import Kids from "./Kids";

const kids_Api = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=0294919b7060e3e3a5be90f5a15e9361&page=1 "


const Moviekids = () => {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        fetch(kids_Api).then((res) => res.json())
            .then((data) => {
                console.log(data);
                setNewMovies(data.results);
            });
    }, []);


    return (
        <div>
            <Header />
            <Movie />

            <div className="mcontainer">
                {newMovies && newMovies.map((movie) =>
                    <Kids key={newMovies.id} {...movie} />
                )};
            </div>
        </div>

    )
}
export default Moviekids;
