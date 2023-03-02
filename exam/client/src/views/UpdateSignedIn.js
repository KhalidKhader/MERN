import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
const UpdateSignedIn = (props) => {
    
    const history = useNavigate();
    const { id } = useParams();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/signup/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);
    
     const updatePerson  = async person => {
        await axios.put('http://localhost:8000/api/signUp/' + id, person)
            .then(res => console.log(res));

            history("/SignedInPeople")
    }
  
    
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <SignUpForm
                        onSubmitProp={updatePerson}
                        name={person.name}
                        age={person.age}
                        email={person.email}
                        password={person.password}
                    />
                </>
            )}
        </div>
    )
}
    
export default UpdateSignedIn;

