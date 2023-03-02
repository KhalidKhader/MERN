import React from 'react'

export default function OptionComp(props) {
  return (
    <div className='optionComp'>
        <h1>{props.optionValue}</h1>
          <button className={props.className} onClick={props.function} >Vote {props.optionValue}</button>  
    </div>
  )
}
