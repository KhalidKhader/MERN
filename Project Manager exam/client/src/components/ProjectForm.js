import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function () {
    let history=useNavigate();
    const [project,setProject]=useState([]);
    const [ProjectName,setProjectName]=useState('');
    const [ProjectDate,setProjectDate]=useState('');
    const [ProjectDateStatus,setProjectDateStatus]=useState('backlog');

    const [errors, setErrors] = useState([]); 
    const [lenError,setLenError]=useState(false);



    let submitFormData=async(e)=>{
        e.preventDefault();
        setProjectDateStatus('backlog');
        let newProject={ProjectName:ProjectName,ProjectDate:ProjectDate,ProjectDateStatus:ProjectDateStatus};
        setProject(newProject);  
        
     await axios.post('http://localhost:8000/api/Project/',{ProjectName,ProjectDate,ProjectDateStatus})
      .then(res=>{
        setProject([...project, res.data]);
        setProjectName('');
        setProjectDate('');
        console.log(newProject);      
        history('/ProjectStatus');
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
    <div className='projectForm' >
                {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
                {lenError&&<h5>Please Add Correct Project name (more than 3 chars)</h5>}
                <div  className='fieldSet'>
                <div className='legend' >Plan a new Project</div>
        <form onSubmit={submitFormData}>
                <br></br>
                <label htmlFor="projectName">project Name:</label>
                <input type="text" id="projectName" name="projectName" onChange={(e)=>{setProjectName(e.target.value||"") 
                 if((ProjectName).length<3){setLenError(true)}
                 else{{setLenError(false)}}   }} value={ProjectName||""} />
                <br/>
                <label htmlFor="projectDate">project Date:</label>
                &nbsp;&nbsp;&nbsp;
                <input type="date" id="projectDate" name="projectDate" onChange={(e)=>{setProjectDate(e.target.value||"")}} value={ProjectDate||""} />
                <br/>
                <input className='blueBtn' type="submit" value="Submit"/>
                </form>
            </div>
        
    </div>
  )
}
