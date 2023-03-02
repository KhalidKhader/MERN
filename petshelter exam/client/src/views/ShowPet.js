import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate,Link,NavLink } from 'react-router-dom';
import PetForm from '../views/PetForm';
import PetComps from '../components/PetComps';
const ShowPet = (props) => {


    
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
    
    //  const updatePet  = async pet => {
    //     await axios.put('http://localhost:8000/api/Pet/' + id, pet)
    //         .then(res => console.log(res));
    //         //history.push('/');
    //         //history.replace
    //         //history("/SignedInPeople")
    // }

    const deletePet = () => {
        axios.delete('http://localhost:8000/api/Pet/' + id)
            .then(res=>{
                history('/');
            })
    }
  
    
    return (
        <div>
            <NavLink className='NavLink' to={'/'}>Go To Home</NavLink>
            <h1>Details About {pet.petName}</h1>
            
            
             <button className='redbtn' onClick={deletePet}> <i className="fa-solid fa-trash-can"></i> Delete Pet</button>
           
            {loaded && (
        
                <>
                    <PetComps
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
    
export default ShowPet;

