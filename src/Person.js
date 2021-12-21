import {React,useState,useEffect} from "react";
import Header from './Header';
import { useParams } from "react-router-dom";
import './styles.css';

const Person = () => {
    const [newCast, setNewCast] = useState('');

    let param = useParams();
    let castId = param.id;
    console.log(castId)
    let castUrl = `https://api.themoviedb.org/3/person/${castId}?api_key=0294919b7060e3e3a5be90f5a15e9361&language=en-US`;

    useEffect(() => {
        console.log(castUrl);
        fetch(castUrl).then((res) => res.json())
            .then((data) => {
                setNewCast(data);
                console.log(newCast);
            });
    }, []);

    return (
        <div>
            <Header/>
            <div className="size">
                    <p className='content'><strong>Biography: </strong>{newCast.biography}</p> 
                    <p className='content'><strong>Birthday: </strong>{newCast.birthday}</p> 
                    {/* <p className='content'><strong>Name: </strong>{newCast."https://image.tmdb.org/t/p/w500" + profile_path}</p>       */}
                </div>
        </div>
    )
}

export default Person;

