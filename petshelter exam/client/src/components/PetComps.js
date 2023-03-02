import React from 'react'
import { useState } from 'react'

export default function 
(props) {
  const [like,setLike]=useState(0);
  return (
    <div className='greDiv'>
        <div className='leftData'>
        <div><b>Pet Type:</b></div>
        <div><b>Description:</b></div>
       <div> <b>Skills:</b></div>
       <button className='likebtn'  onClick={()=>{setLike(like+1)}} > <i className="fa-solid fa-thumbs-up"></i> Like {props.petName}</button>

        </div>
        <div className='rightData'>
          <div>{props.petTyoe}</div>
          <div>{props.petDescription}</div>
          <div>{props.skill1}</div>
          <div>{props.skill2}</div>
          <div>{props.skill3}</div>
          <br></br>
          <span> {like} like(s)</span>
        </div>
     


    </div>
  )
}
