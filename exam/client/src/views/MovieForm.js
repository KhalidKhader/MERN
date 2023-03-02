import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';
export default function (props) {
    const [movie,setMovie]=useState(props.yourName||"");
    const [yourName,setYourName]=useState(props.yourName||"");
    const [movieTitle,setMovieTitle]=useState(props.movieTitle||"");
    const [Rating,setRating]=useState(props.Rating||"1");
    const [yourReview,setYourReview]=useState(props.yourReview||"");
   
    const [errors, setErrors] = useState([]); 


    let history=useNavigate();

      let submitFormData=async(e)=>{
        e.preventDefault();
        let newMovie={yourName:yourName,movieTitle:movieTitle,Rating:Rating,yourReview:yourReview};
        setMovie(newMovie);
        
     await axios.post('http://localhost:8000/api/Movie/',{yourName,movieTitle,Rating,yourReview})
      .then(res=>{
        setMovie([...movie, res.data]);
    setYourName('');
    setMovieTitle('');
    setRating('');
    setYourReview('');
    setMovie('');
    console.log(yourName,movieTitle,Rating,yourReview)

        history('/movies');
    })


    .catch(err=>{
      const errorResponse = err.response.data.errors; 
      const errorArr = []; 
      for (const key of Object.keys(errorResponse)) { 
          errorArr.push(errorResponse[key].message)
      }
      
    setErrors(errorArr);
      console.log(errorArr);
  })    
    }




  return (
    <div >
        <Header title='Submit a Movie and a Review ' buttontitle='Add New Movie' functionClick={()=>{ history('/movies/new')}} />
        <div className='MovieForm'  >
        {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
        
            
                <div className='MovieName'>
                <label htmlFor='MovieName' >Movie Title</label>
                <input type='text' id='MovieTitle' name='MovieTitle' value={movieTitle} onChange={(e) => { setMovieTitle(e.target.value||"") }}/>
                </div>

                <div className='yourName'>
                <label htmlFor='yourName' >Your Name</label>
                <input type='url' id='yourName' name='yourName' value={yourName} onChange={(e) => { setYourName(e.target.value||"") }}/>
                </div>

                <div className='rating'>
                <label htmlFor='rating' >Rating</label>
                <select  value={Rating} onChange={(e) => { setRating(e.target.value||1) }}>
                <option  value={1}>1</option>
                <option value={2}>2</option>
                <option  value={3}>3</option>
                <option value={4}>4</option>
                <option  value={5}>5</option>
                <option  value={6}>6</option>
                <option value={7}>7</option>
                <option  value={8}>8</option>
                <option value={9}>9</option>
                <option  value={10}>10</option>
                </select> 
                </div>
                <label htmlFor='yourReview' >Your Review</label>
                <div className='yourReview'>
                <textarea value={yourReview} onChange={(e) => { setYourReview(e.target.value||"") }} />
                <div>
                <button className='moviebtn' onClick={submitFormData}>Submit</button>
                <button className='moviebtn' onClick={()=>{history('/movies')}} >Cancel</button>
            </div>

                </div>
                
            </div>

            
            
        </div>
        
  
  )
}
