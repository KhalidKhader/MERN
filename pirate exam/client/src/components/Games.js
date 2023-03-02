import React, { useEffect, useState } from 'react';
import { useNavigate,Link,Route,Routes,BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import GameComponemt from './GameComponemt';

export default function Games() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Players')
            .then(res => setPeople(res.data));
    }, [])

    const deletePlayer = (personId) => {
        axios.delete('http://localhost:8000/api/Players/' + personId)
            .then(res=>{
                setPeople(people.filter(person => person._id != personId));
            })
    }
    

  return (
    <div>
       
        <Routes>
        <Route element={<GameComponemt title='Game 1'/>} path="/games/1"/>
        <Route element={<GameComponemt title='Game 2'/>} path="/games/2"/>
        <Route element={<GameComponemt title='Game 3'/>} path="/games/3"/>
        </Routes>
        
        <Link to='/games/1'>GAME 1</Link>
        <Link to='/games/2'>GAME 2</Link>
        <Link to='/games/3'>GAME 3</Link>
       
         <table className="table table-striped">
        <thead className="thead-dark">
                <tr><th >Team Name</th><th >Preferd Position</th><th >Actions</th></tr>
                </thead>
        <tbody>
        {people.map((person, idx) => {
           return(

            <tr key={idx}>
                <td> {person.name}</td>
            <td>{person.position}</td>
            <td><div className='btn btn-outline-danger ' onClick={()=>deletePlayer(person._id)}>Delete</div></td>
            </tr>
           )
        })}
        </tbody>
        
        </table>

    </div>
  )
}
