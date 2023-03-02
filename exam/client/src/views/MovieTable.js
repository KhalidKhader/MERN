import React, { useEffect, useState } from 'react';
import { useNavigate,Link,NavLink,useNavigatite } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

export default function MovieTable() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Movie')
            .then(res => setMovie(res.data));
    }, [])

    let history=useNavigate();



  return (
    <div className='MovieForm'>

            <button className='addbtn' onClick={()=>{history('/movies/new')}}>Add a new Movie</button>
<Header title='Movie List'  />
         <table  id="customers" className="">
        <thead className="thead-dark">
                <tr><th > Movie Title</th><th >Actions</th></tr>
                </thead>
        <tbody>
        {movie.map((movies, idx) => {
           return(
            <tr key={idx}>
            <td>{movies.movieTitle}</td>
           <td>
<div className='LinkDiv'>
<Link className='moviebtnGreenBlack' to={"/movies/" + movies._id}> Read a Review </Link>
 <Link className='moviebtnGreenWhite' to={"/movies/" + movies._id+"/review" }>  Write a Review</Link> 
</div>
             </td>
            </tr>
           )
        })}
        </tbody>
        
        </table>

    </div>
  )
}
