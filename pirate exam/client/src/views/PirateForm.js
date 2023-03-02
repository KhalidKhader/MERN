import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';
export default function (props) {
    const [PirateName,setPirateName]=useState(props.PirateName||"");
    const [ImageUrl,setImageUrl]=useState(props.ImageUrl||"");
    const [NumberOfCheets,setNumberOfCheets]=useState(props.NumberOfCheets||"");
    const [PirateCatchPhase,setPirateCatchPhase]=useState(props.PirateCatchPhase||"");
    const [CrewPosition,setCrewPosition]=useState(props.CrewPosition||"Captin");
    const [PegLeg,setPegLeg]=useState(props.PegLeg||true);
    const [EyePatch,setEyePatch]=useState(props.EyePatch||true);
    const [HookHand,setHookHand]=useState(props.HookHand||true);
    const [Pirate,setPirate]=useState(props.HookHand||"");
    const [errors, setErrors] = useState([]); 


    let history=useNavigate();
    const handleChangePegLeg = () => {
        setPegLeg(!PegLeg);
      };

     const handleChangeEyePatch = () => {
        setEyePatch(!EyePatch);
      };

    const handleChangeHookHand = () => {
        setHookHand(!HookHand);
      };



      let submitFormData=async(e)=>{
        e.preventDefault();
        let newPirate={PirateName:PirateName,ImageUrl:ImageUrl,NumberOfCheets:NumberOfCheets,PirateCatchPhase:PirateCatchPhase,
            CrewPosition:CrewPosition,PegLeg:PegLeg,EyePatch:EyePatch,HookHand:HookHand};
            setPirate(newPirate);
        
     await axios.post('http://localhost:8000/api/Pirate/',{PirateName,ImageUrl,NumberOfCheets,PirateCatchPhase, CrewPosition,PegLeg,EyePatch,HookHand})
      .then(res=>{
    setPirate([...Pirate, res.data]);
    setPirateName('');
    setImageUrl('');
    setNumberOfCheets('');
    setPirateCatchPhase('');
    setCrewPosition('');
    setPegLeg('');
    setEyePatch('');
    setPirate('');



        history('/PirateTeam');
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

     const goToTeam=()=>{
      history('/PirateTeam');
      console.log('PirateTeam')
    }
   
  




  return (
    <div>
        <Header title='Add Pirate ' buttontitle='Crew Board' functionClick={goToTeam} />
        <div className='formPirate'>
        {errors.map((err, index) => <ul><li className='validatioErr' key={index}>{err}</li></ul>)}
            <div className='left'>
                <div className='PirateName'>
                <label htmlFor='PirateName' >Pirate Name</label>
                <br/>
                <input type='text' id='PirateName' name='PirateName' value={PirateName} onChange={(e) => { setPirateName(e.target.value||"") }}/>
                </div>

                <div className='ImageUrl'>
                <label htmlFor='ImageUrl' >Image Url</label>
                <br/>
                <input type='url' id='ImageUrl' name='ImageUrl' value={ImageUrl} onChange={(e) => { setImageUrl(e.target.value||"") }}/>
                </div>

                <div className='NumberOfCheets'>
                <label htmlFor='NumberOfCheets' ># Of Chests Treasure</label>
                <br/>
                <input type='number' id='NumberOfCheets' name='NumberOfCheets' value={NumberOfCheets} onChange={(e) => { setNumberOfCheets(e.target.value||"") }}/>
                </div>

                <div className='PirateCatchPhase'>
                <label htmlFor='PirateCatchPhase' >Pirate Catch Phase</label>
                <br/>
                <input type='text' id='PirateCatchPhase' name='PirateCatchPhase' value={PirateCatchPhase} onChange={(e) => { setPirateCatchPhase(e.target.value||"") }}/>
                </div>
            </div>

            <div className='right'>
            <div className='CrewPosition'>
                <label htmlFor='CrewPosition' >Crew Position</label>
                <br/>
                
                <select  value={CrewPosition} onChange={(e) => { setCrewPosition(e.target.value) }}>
                <option defaultValue value="Captin">Captin</option>
                <option value="First Mate">First Mate</option>
                <option  value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option  value="Powder Monkey">Powder Monkey</option>
                </select> 
                

                {/* <select value={type} onChange={(e) => { setType(e.target.value) }} >
                <option defaultValue value="people">People</option>
                <option value="planets">Planets</option>
                <option  value="starships">Starships</option>
                </select> 
                 */}

                </div>

                <div className='checkbox'>
                <div className='PegLeg'>
                <input type='checkbox' id='PegLeg' name='PegLeg' value='Peg Leg' defaultChecked onChange={handleChangePegLeg} />
                <label  htmlFor='PegLeg' className='checkboxlabel' >Peg Leg
                </label>
                </div>

                <div className='EyePatch'>
                <input type='checkbox' id='EyePatch' name='EyePatch' value='Eye Patch' defaultChecked onChange={handleChangeEyePatch} />
                <label htmlFor='EyePatch' className='checkboxlabel'>Eye Patch</label>
                </div>

                <div className='HookHand'>
                <input type='checkbox' id='HookHand' name='HookHand' value='Hook Hand' defaultChecked onChange={handleChangeHookHand} />
                <label htmlFor='HookHand' className='checkboxlabel'>Hook Hand</label>
                </div>
                </div>
  
                <button className='addbtn' type='submit' onClick={submitFormData} >Add Pirate</button>
            </div>
            
        </div>
        
    </div>
  )
}
