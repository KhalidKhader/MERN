import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function AboutCrew(props) {
    const [legIsOff,setLegIsOff]=useState(props.PegLeg);
    const [eyeIsOff,setEyeIsOff]=useState(props.EyePatch);
    const [hookIsOff,setHookIsOff]=useState(props.HookHand);

    

  return (
    <div className='main'>

        <div className='leftLogo'>
        <img  src="https://thumbs.dreamstime.com/b/create-email-icon-224440188.jpg" width="250px" height="200px"   alt="pirate" />
        <h1>"Shiver Me Timbers"</h1>
        </div>

        <div className='rightLogo'>
            <h1 className='titleCenter'>About</h1>
            <div>Position: {props.CrewPosition}</div>
            <div>Treasure: {props.PirateCatchPhase}</div>
            <div>Peg Leg: {props.PegLeg} <button className={`${legIsOff}`} onClick={() => setLegIsOff(!legIsOff)}>{ legIsOff ? 'Yes' : 'No' }</button> </div>
            <div>Eye Patch: {props.EyePatch} <button className={`${eyeIsOff}`} onClick={() => setEyeIsOff(!eyeIsOff)}>{ eyeIsOff ? 'Yes' : 'No' }</button> </div>
            <div>Hook Hand: {props.HookHand} <button className={`${hookIsOff}`} onClick={() => setHookIsOff(!hookIsOff)}>{ hookIsOff ? 'Yes' : 'No' }</button> </div>
        </div>

    </div>
  )
}
