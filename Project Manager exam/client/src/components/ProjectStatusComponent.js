import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function 
(props) {
  return (
    <div className={`ProjectStatusComponent  `} >
        <h2>{props.projectName}</h2>
        <div className={`x${props.idx}`}>Due: {props.projectDate}</div>
        <button className={props.buttonClass} onClick={props.buttonFunction} >{props.buttonTitle} <i class="fa-thin fa-forward-fast"></i></button>
    </div>
  )
}
