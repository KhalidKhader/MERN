import { useNavigate,useParams,Link ,NavLink} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';
import Nav from '../components/Nav';
export default function (props) {

    const [pet,setPet]=useState([]);
    const [state,setState]=useState(true);


    let url=window.location.pathname;
    console.log(url);


     
    useEffect(() => {
     if (url==='/PetForm'){
      setState(true);
     }else{
      setState(false);
     }
  }, [])
    

    const [skill1,setSkill1]=useState(props.skill1||"");
    const [skill2,setSkill2]=useState(props.skill2||"");
    const [skill3,setSkill3]=useState(props.skill3||"");
    const [petName,setPetName]=useState(props.petName||"");
    const [petDescription,setPetDescription]=useState(props.petDescription||"");
    const [petType,setPetType]=useState(props.petType||"");
   
    const [errors, setErrors] = useState([]); 
    const [lenErr,setLenErr]=useState(false);
    const { id } = useParams();



    let history=useNavigate();
    
    
   


      let submitFormData=async(e)=>{
        e.preventDefault();
        let newPet={skill1:skill1,skill2:skill2,skill3:skill3,petName:petName,petDescription:petDescription,petType:petType};
        setPet(newPet);
        
     await axios.post('http://localhost:8000/api/Pet/',{skill1,skill2,skill3,petName,petDescription,petType})
      .then(res=>{
        setPet([...pet, res.data]);
        setSkill1('');
        setSkill2('');
        setSkill3('');
        setPetName('');
        setPetDescription('');
        setPetType('');
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
  history('/'); 
    }

  
    const updatePet  = async () => {
      await axios.put('http://localhost:8000/api/Pet/' + id, {skill1,skill2,skill3,petName,petDescription,petType})
          .then(res => console.log(res.data));
          history('/');
          
  }

  




  return (
   <div>
                <NavLink className={'NavLink'} to={'/'}>Go To Home</NavLink>
{ state&&<h2>Know a Pet needing a home?</h2>} 
   <div className='greyDiv' >
                        {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
        <div className='formPet'>
            <div className='right'>
                <div className='option'>
                    <h2>Skills (Optional)</h2>
                <label htmlFor='skill1' ><h2>Skill 1</h2></label>
                <br/>
                <input type='text' id='skill1' name='skill1' value={skill1} onChange={(e) => { setSkill1(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='skill2' ><h2>Skill 2</h2>  </label>
                <br/>
                <input type='text' id='skill2' name='skill2' value={skill2} onChange={(e) => { setSkill2(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='skill3' ><h2>Skill 3</h2></label>
                <br/>
                <input type='text' id='skill3' name='skill3' value={skill3} onChange={(e) => { setSkill3(e.target.value||"") }}/>
                </div>
            </div>

            <div className='left'>
            <div className='option'>
                <label htmlFor='petName' ><h2>Pet Name</h2></label>
                <br/>
                <input type='text' id='petName' name='petName' value={petName} onChange={(e) => { setPetName(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='petType' ><h2>Pet Type</h2>  </label>
                <br/>
                <input type='text' id='petType' name='petType' value={petType} onChange={(e) => { setPetType(e.target.value||"") }}/>
                </div>

                <div className='option'>
                <label htmlFor='petType' ><h2>Pet Description</h2></label>
                <br/>
                <input type='petDescription' id='petDescription' name='petDescription' value={petDescription} onChange={(e) => { setPetDescription(e.target.value||"") }}/>
                </div>
                          
                { state&& <button className='votebtn' type='submit' onClick={submitFormData} > <i className="fa-solid fa-upload"></i> Add Pet</button>}   
                {!state&& <button className='votebtn' type='submit' onClick={updatePet} > <i className="fa-solid fa-pen-to-square"></i> Update Pet</button>}
                            <div>
                <div>
                    <br/><br/><br/>
                    {/* {lenErr&&(<div className='validatioErr' >Please Enter valid Question (More than 10 chars)</div>)} */}
                

                </div>
            </div>
            </div>
           

            
        </div>
        
    </div>
   </div>
  )
}
