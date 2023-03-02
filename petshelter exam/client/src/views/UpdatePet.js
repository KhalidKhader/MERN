import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PetForm from '../views/PetForm';
const UpdatePet = (props) => {


    
    const history = useNavigate();
    const { id } = useParams();
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Pet/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, []);
    
     const updatePet  = async pet => {
        await axios.put('http://localhost:8000/api/Pet/' + id, pet)
            .then(res => console.log(res));
            //history.push('/');
            //history.replace
            //history("/SignedInPeople")
    }
  
    
    return (
        <div>
            <h1>Update a {pet.petName}</h1>
            {loaded && (
        
                <>
                    <PetForm
                        onSubmitProp={updatePet}
                        petName={pet.petName}
                        petDescription={pet.petDescription}
                        petType={pet.petType}
                        skill1={pet.skill1}
                        skill2={pet.skill2}
                        skill3={pet.skill3}
                    />
                </>
            )}
            
        </div>
    )
}
    
export default UpdatePet;

