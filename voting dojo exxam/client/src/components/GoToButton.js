import React, { useEffect,useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';

export default function GoToButton() {
  const {id}=useParams();
  let history=useNavigate();
  let [goTo,setGoTo]=useState('');
  const [btnVar,setBtnVar]=useState('');

  let currentPath=window.location.pathname;
 useEffect(()=>{
  if(currentPath=='/'){
    setBtnVar('Create your own poll');
    setGoTo('/VotingForm')
  }else {
   setBtnVar('go To Home');
    setGoTo('/')
  }

  // if(currentPath=='/VotingForm'){
  //   setBtnVar('go To Home');
  //   setGoTo('/')
  // }else if(currentPath==`/VoteResults/${id}`){
  //   setBtnVar('go To Home');
  //   setGoTo('/')
  // }
  //console.log(id)
 },[currentPath])
  //console.log(currentPath);
  
  return (
    <div>
              <button className='blueBtn' onClick={()=>{history(`${goTo}`)}}>{btnVar}</button>
    </div>
  )
}
