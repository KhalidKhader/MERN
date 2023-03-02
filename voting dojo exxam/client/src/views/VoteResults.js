import React from 'react'
import { useState,useEffect } from 'react';
import PollComp from '../components/PollComp';
import axios from 'axios';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import  {useParams} from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';




export default function () {
    const {id}=useParams();
  const [option, setOption] = useState([]);
  let [closeThanks,setCloseThanks]=useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/Vote/' + id)
        .then(res => {
            setOption(res.data);
          //  console.log(res.data)
        })
}, []);

  return (
   <div className='greyDiv'>
      <PieChart className='leftChart'
  data={[
    { title: option.option1, value: option.option1Rate||0, color: '#E38627' },
    { title: option.option2, value: option.option2Rate||0, color: '#C13C37' },
    { title: option.option3, value: option.option3Rate||0, color: '#6A2135' },
    { title: option.option4, value: option.option4Rate||0, color: '#6A4125' },

  ]}
  
/>
   <div>
    {!closeThanks&&<div className='thanks'  >
   <span className='leftthanks' > <i className="fa-solid fa-circle-info"></i>  Thanks for Voting ! Here are the Results</span>
    <i className="fa-solid fa-circle-xmark rightexit" onClick={()=>setCloseThanks(true)} ></i>    </div>}
   <h1>{option.question}?</h1>
    <h2>{option.option1} : {option.option1Rate} Votes.</h2>
    <h2>{option.option2} : {option.option2Rate} Votes.</h2>
{  option.option3 &&  <h2>{option.option3} : {option.option3Rate} Votes.</h2>} 
{ option.option4 &&  <h2>{option.option4} : {option.option4Rate}Votes.</h2>}  
    </div>  

    
 




   </div>
  )
}

