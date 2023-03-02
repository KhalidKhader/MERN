import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function SignUpForm(props) {
    let [user,setUser]=useState({
        name:'',
        age:'',
        email:'',
        password:''
    });
    let history=useNavigate();
    const [name, setname] = useState(props.name);
    const [age, setAge] = useState(props.age); 
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);  
    const [people, setPeople] = useState([]);
    const [loadeding, setLoadeding] = useState(false);
    const [errors, setErrors] = useState([]); 


    let submitFormData=async(e)=>{
        setUser(user['age']=age,user['name']=name,user['email']=email,user['password']=password);
        e.preventDefault();
        let newPerson={name:name,age:age,email:email,password:password};
        setPeople(newPerson);

     await axios.post('http://localhost:8000/api/signup',{name,age,email,password})
      .then(res=>{
        setPeople([...people, res.data]);

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
  props.onSubmitProp({name,age,email,password})
        setname('');
        setAge('');
        setEmail('');
        setPassword('');
        
        console.log(user);
       
        
        
    }


    let getFormValue=(e)=>{
        let myUser=[...user];
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
    }
  return (
    <div>
        <h1 className='title'>SignUpForm</h1>
        <form onSubmit={submitFormData}>
        {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
            <div className='form-group my-3'>
           
            <input type='text' onChange={(e) => { setname(e.target.value) }} value={name} name='name' className='form-control' placeholder="Name"></input>
            </div>

            <div className='form-group my-3'>
            
            <input type='number' onChange={(e) => { setAge(e.target.value) }} value={age} name='age' className='form-control' placeholder="Age"></input>
            </div>

            <div className='form-group my-3'>
           
            <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} name='email' className='form-control' placeholder="Email"></input>
            </div>

            <div className='form-group my-3'>
           
            <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' className='form-control' placeholder="Password"></input>
            </div>
            <button type='submit' className='btn btn-secondary btn-lg'   role="button" aria-pressed="true">{loadeding ? <i  className="far fa-spinner ">Loading ...</i>:'Register'}</button>
        </form>
        
    
    </div>
  )
}
