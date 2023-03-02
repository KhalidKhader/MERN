import React from 'react'
export default function Header(props) {

 
  return (
    <div className='headerNav'>
        <h1>{props.title}</h1>
        <button className='crewbtn' onClick={props.functionClick}>{props.buttontitle}</button>
    </div>
  )
}
