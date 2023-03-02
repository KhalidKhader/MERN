import React from 'react'
export default function (props) {
  return (
    <div className='crewComp'>
        <div className='message'>
           <img  src="https://thumbs.dreamstime.com/b/create-email-icon-224440188.jpg" width="180px" height="130px" 
  alt="pirate" />
        </div>
        <div className='data'>
        <h1 className='title'>
            {props.title}
        </h1>
        <div className='buttons'>
            <button className='blueBtn' onClick={props.goToId} >View Pirate</button>
            <button className='redBtn' onClick={props.delete} >View the Plank</button>
        </div>
        </div>
    </div>
  )
}
