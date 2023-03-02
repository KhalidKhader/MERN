import React, { useEffect, useState,useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function PlayersForm(props) {

    let history=useNavigate();
    let [player,setPlayer]=useState();
    const [name, setname] = useState("");
    const [position, setPosition] = useState(""); 
    const [people, setPeople] = useState([]);
    const [loadeding, setLoadeding] = useState(false);
    const [errors, setErrors] = useState([]); 
    let valueErr=false;
    
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/Players')
            .then(res => setPeople(res.data));
    }, [])

    let submitFormData=async(e)=>{
        e.preventDefault();
        let newPlayer={name:name,position:position};
        setPlayer(newPlayer);
        
         valueErr=name.trim().length <3 ? true:false;

     await axios.post('http://localhost:8000/api/Players/',{name,position})
      .then(res=>{
    setPeople([...people, res.data]);
        setname('');
        setPosition('');
        history('/players');
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



    const deletePlayer = (personId) => {
        axios.delete('http://localhost:8000/api/Players/' + personId)
            .then(res=>{
                setPeople(people.filter(person => person._id != personId));
            })
    }
    

  return (
    <div>
        <h1 className='title'>SignUpForm</h1>
        {valueErr&&<div>Name error less than 3 char</div>}
        <form onSubmit={submitFormData}>
        {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
            <div className='form-group my-3'>
           
            <input type='text'  onChange={(e) => { setname(e.target.value||"") }} value={name||""} name='name' className='form-control' placeholder="Name"></input>
            </div>
 
            <div className='form-group my-3'>
            
            <input type='text' onChange={(e) => { setPosition(e.target.value||"") }} value={position||""} name='position' className='form-control' placeholder="Player"></input>
            </div>

         
            <input type="submit" className='btn btn-outline-success btn-block' />
        </form>
        <table className="table table-striped">
        <thead className="thead-dark">
                <tr><th >Team Name</th><th >Preferd Position</th><th >Actions</th></tr>
                </thead>
        <tbody>
        {people.map((person, idx) => {
           return(

            <tr key={idx}>
                <td> {person.name}</td>
            <td>{person.position}</td>
            <td><div className='btn btn-outline-danger ' disabled onClick={()=>deletePlayer(person._id)}>Delete</div></td>
            </tr>
           )
        })}
        </tbody>
        
        </table>

    </div>
  )
}









