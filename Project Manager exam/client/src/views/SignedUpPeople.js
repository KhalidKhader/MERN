import React from 'react'
import Card from '../components/Card'
export default function SignedUpPeople(props) {
  return (
    <div>
   { props.people.map((e)=>{
   <Card key={e.id} name={e.name} email={e.email} age={e.age} password={e.password}/>
        })}
    
    </div>
  )
}
