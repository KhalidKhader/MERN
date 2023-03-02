import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
 
  return (
    <div className='headerNav'>
        <h1>{props.title}</h1>
    </div>
  )
}
