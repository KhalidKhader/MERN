import React from 'react'
import SignedUpPeople from './SignedUpPeople';
import Card from '../components/Card'
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function SignedInPeople(props) {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
 // const { personId } = props;
  // async function getData(){
  //  await axios.get('http://localhost:8000/api/signup')
  //   .then(res =>{ 
  //     console.log(res.data)
  //       setPeople(res.data)
  //       setLoaded(true);
  //   });
   
  // }
 
  //   useEffect( () => {
  //     getData();
  //     console.log(people,'hhh');
  // }, [])

//   const removeFromDom = personId => {
//     setPeople(people.filter(person => person._id != personId))
// }
  useEffect(() => {
    axios.get('http://localhost:8000/api/signup')
        .then(res => setPeople(res.data));
}, [])

// const deleteSignedInPerson = (personId) => {
//   console.log(personId);
//   axios.delete('http://localhost:8000/api/person/' + personId)
//       .then(res=>{
//         setPeople(people.filter(person => person._id != personId))
//       })
// }

const removeFromDom = personId => {
  setPeople(people.filter(person => person._id != personId))
}
  return (
    <div >
     
     {/* <SignedUpPeople people={people}/> */}

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
