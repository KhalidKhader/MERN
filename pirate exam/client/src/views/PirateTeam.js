import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import React from 'react'
import Header from '../components/Header';
import axios from 'axios';
import CrewComponent from '../components/CrewComponent';

export default function PirateTeam() {
    let history=useNavigate();
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/Pirate')
            .then(res => setPeople(res.data));
    }, [])

    const deletePlayer = (personId) => {
        axios.delete('http://localhost:8000/api/Pirate/' + personId)
            .then(res=>{
                setPeople(people.filter(person => person._id != personId));
            })
    }
    const goToAdd=()=>{
        history('/PirateForm');
      }

     const  goToCrewComp=(id)=>{
        console.log('hi');
        history(`/AboutCrew/${id}/`)

     };
  return (
    <div className='formPirate'>
        <Header title='Pirate Crew' buttontitle='Add Pirate' functionClick={goToAdd} />
        {people.map((pirate, idx) => {
           return(
            <CrewComponent key={idx} title={pirate.PirateName} delete={()=>{deletePlayer(pirate._id)}}  goToId={()=>{goToCrewComp(pirate._id)}} />


           
           )
        })}
        
    </div>
  )
}
