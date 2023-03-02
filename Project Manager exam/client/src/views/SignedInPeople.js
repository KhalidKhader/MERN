import React from 'react'
import SignedUpPeople from './SignedUpPeople';
import Card from '../components/Card'
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function SignedInPeople(props) {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
 
  useEffect(() => {
    axios.get('http://localhost:8000/api/signup')
        .then(res => setPeople(res.data));
}, [])



const removeFromDom = personId => {
  setPeople(people.filter(person => person._id != personId))
}
  return (
    <div >
     

<div className='card-cont'>
  
{people.map((person, idx) => {
                return (
                    <Card key={idx}
                    name={person.name}
                    age={person.age}
                    email={person.email}
                    password={person.password}
                    id={person.id}
                    idx={person._id}
                    successCallback={()=>removeFromDom(person._id) }
                    
                    />
                )
            })}
</div>
    </div>
  )
}
