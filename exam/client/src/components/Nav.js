import React from 'react'
import { Link ,BrowserRouter} from 'react-router-dom';
export default function Nav(props) {
  return (
   <div>
     <div className={props.className} >
    <h1>{props.title}</h1>
    </div>
   </div>
  )
}
