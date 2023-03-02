import React, { useEffect, useState } from 'react';
import { useNavigate,Link,NavLink } from 'react-router-dom';
import axios from 'axios';

export default function PetTable() {

    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Pet')
            .then(res => setPet(res.data));
    }, [])

    // const deletePlayer = (petId) => {
    //     axios.delete('http://localhost:8000/api/Pet/' + petId)
    //         .then(res=>{
    //             setPet(pet.filter(pets => pets._id != petId));
    //         })
    // }

  return (
    <div>
        <NavLink className={'NavLink'} to={'/PetForm'}>add a pet to the shelter</NavLink>
            <h2>These Pets are Looking For a good home</h2>
         <table className="table table-striped">
        <thead className="thead-dark">
                <tr><th > Name</th><th >Type</th><th >Actions</th></tr>
                </thead>
        <tbody>
        {pet.map((pets, idx) => {
           return(
            <tr key={idx}>
                <td> {pets.petName}</td>
            <td>{pets.petType}</td>
            {/* <td><div className='btn btn-outline-danger ' onClick={()=>deletePlayer(pets._id)}>Delete</div></td> */}
           <td>
           <Link to={"/pet/" + pets._id}> Details </Link>&nbsp; |<Link to={"/pet/" + pets._id + "/edit"}> Edit</Link> 
             </td>
            </tr>
            //onClick={deletePlayer}
           )
        })}
        </tbody>
        
        </table>

    </div>
  )
}
