import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios';
import GoToButton from '../components/GoToButton';
export default function (props) {
    const [poll,setPoll]=useState("");
    const [option1,setOption1]=useState("");
    const [option2,setOption2]=useState("");
    const [option3,setOption3]=useState("");
    const [option4,setOption4]=useState("");

    const [question,setQuestion]=useState("");
    const [errors, setErrors] = useState([]); 
    const [lenErr,setLenErr]=useState(false);


    let history=useNavigate();
    



      let submitFormData=async(e)=>{
        e.preventDefault();
        let newPoll={option1:option1,option2:option2,option3:option3,option4:option4,question:question};
        setPoll(newPoll);
        
     await axios.post('http://localhost:8000/api/Vote/',{option1,option2,option3,option4,question})
      .then(res=>{
        setPoll([...poll, res.data]);
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setQuestion('');
   



    })


    .catch(err=>{
      const errorResponse = err.response.data.errors; 
      const errorArr = []; 
      for (const key of Object.keys(errorResponse)) { 
          errorArr.push(errorResponse[key].message)
      }
      
    setErrors(errorArr);
      //console.log(errorArr);
  })    
    }

  
    
  




  return (
    <div className='greyDiv' >
        <div className='formVote'>
            <div className='right'>
                <div className='option'>
                <label htmlFor='option1' >Option 1 <span  className='validatioErr' >*</span></label>
                <br/>
                <input type='text' id='option1' name='option1' value={option1} onChange={(e) => { setOption1(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='option' >Option 2 <span  className='validatioErr' >*</span> </label>
                <br/>
                <input type='text' id='option2' name='option2' value={option2} onChange={(e) => { setOption2(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='option3' >Option 3 *</label>
                <br/>
                <input type='text' id='option3' name='option3' value={option3} onChange={(e) => { setOption3(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='option4' >Option 4 *</label>
                <br/>
                <input type='text' id='option4' name='option4' value={option4} onChange={(e) => { setOption4(e.target.value||"") }}/>
                </div>
            </div>

            <div className='left'>
            <div>
            <label htmlFor='question' >Question <span  className='validatioErr' >*</span> </label>
            <br/>
            <textarea value={question} onChange={(e) => { setQuestion(e.target.value||"") 
            if(((e.target.value).trim.length)<10){setLenErr(true)}
            if (question.length >10) {setLenErr(false)} } } />
            </div>
                <button className='votebtn' type='submit' onClick={submitFormData} >Submit poll</button>
            <div>
                <div>
                    <br/><br/><br/>
                    {lenErr&&(<div className='validatioErr' >Please Enter valid Question (More than 10 chars)</div>)}
                {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
                

                </div>
            </div>
            </div>
           

            
        </div>
        
    </div>
  )
}
