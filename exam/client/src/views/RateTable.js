import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

export default function RateTable() {

    const {id}=useParams();
    let history=useNavigate();
    const [rate, setRate] = useState([]);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Movie/'+id)
            .then(res => setMovie(res.data));
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Rate/${id}`)
        //axios.get('http://localhost:8000/api/Rate/')
            .then(res => {setRate(res.data); });
           
    }, [])





  

    const deleteMovie = () => {
        axios.delete('http://localhost:8000/api/Movie/' + id)
            .then(res=>{
              history('/movies')
            })
    }

  return (
    <div className='MovieForm'>
    
<Header title={`Reviews for ${movie.movieTitle}`} />
         <table  id="customers" className="">
        <thead className="thead-dark">
                <tr><th > Reviewr</th><th >Rating</th><th >Review</th></tr>
                </thead>
        <tbody>
        {rate.map((Rates, idx) => {
           return(
            <tr key={idx}>
            <td>{Rates.yourName}</td>
            <td>{Rates.Rating}</td>
           <td>{Rates.yourReview}</td>
            </tr>
           )
        })}
        </tbody>
        
        </table>
        <button className='redbtn' onClick={deleteMovie}>Delete Movie</button>

    </div>
  )
}
