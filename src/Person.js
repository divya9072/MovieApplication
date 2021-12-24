import {React,useState,useEffect} from "react";
import Header from './Header';
import { useParams } from "react-router-dom";
import './styles.css';
import axios from 'axios';

const Person = () => {
    const [newCast, setNewCast] = useState('');

    let param = useParams();
    let castId = param.id;
    console.log(castId)
    let personUrl = `https://api.themoviedb.org/3/person/${castId}?api_key=0294919b7060e3e3a5be90f5a15e9361&language=en-US`;

    useEffect(() => {
        axios.get(personUrl).then((res) => {
          console.log(res.data);
          setNewCast(res.data);
        })
    },[]);
    return (
        <div>
            <Header/>
            <div className="box">
            
            <img src={"https://image.tmdb.org/t/p/w500" + newCast.profile_path} className="insideimg" alt='Profile'></img>
                <div className="box1">
                    <p className='content'><strong>Name: </strong>
                    {newCast.name==="" || null ? 'No Data Provided' : newCast.name}</p> 

                    <p className='content' ><strong>Biography: </strong>
                    {newCast.biography==="" || null ? 'No Data Provided' : newCast.biography} </p>

                    <p className='content'><strong>Birthday: </strong>
                    {newCast.birthday===null || "" ? 'No Data Provided' : newCast.birthday}</p> 

                    <p className='content'><strong>Department: </strong>
                    {newCast.known_for_department==="" || null ? 'No Data Provided' : newCast.known_for_department}</p> 
                    
                    </div>
                </div>
        </div>
    )
}

export default Person;

