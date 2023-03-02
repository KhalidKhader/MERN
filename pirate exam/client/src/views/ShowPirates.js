import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AboutCrew from './AboutCrew'

const ShowPirates = (props) => {
    
    const { id } = useParams();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Pirate/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);
    
 
    
    return (
        <div>
           
            {loaded && (
                
                    <AboutCrew
                    CrewPosition={person.CrewPosition}
                    PirateCatchPhase={person.PirateCatchPhase}
                    PegLeg={person.PegLeg}
                    EyePatch={person.EyePatch}
                    HookHand={person.HookHand}
                    />
                
            )}
        </div>
    )
}
    
export default ShowPirates;

