import React from 'react'
export default function Nav(props) {
  return (
   <div>
     <div className={props.className} >
    <h1>{props.title}</h1>
    </div>
   </div>
  )
}
