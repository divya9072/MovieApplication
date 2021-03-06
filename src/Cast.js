import { React, useState, useEffect } from "react";
import Header from "./Header";
import './styles.css';
import { Link } from "react-router-dom";
import axios from 'axios';

import { useParams } from "react-router-dom";
const Cast = () => {
    const [newCast, setNewCast] = useState('');

    let param = useParams();
    let castId = param.id;
    let castUrl = `https://api.themoviedb.org/3/movie/${castId}/credits?api_key=0294919b7060e3e3a5be90f5a15e9361&language=en-US`;

    useEffect(() => {
        axios.get(castUrl).then((res) => {
          console.log(res.data);
          setNewCast(res.data);
        })
    },[castId]);

    const castDetails = newCast?.cast?.slice(0, 5).map((el) => (
        <Link className="c" style={{ textDecoration: 'none', color: '#000000' }} to={`/Person/${el.id}`}>
            <div className="castt" >
                {el.name}
            </div></Link>
    ))
    return (
        <div >
            <p className='content'><strong>Cast:</strong>{castDetails}</p>
        </div>
    )
}

export default Cast;