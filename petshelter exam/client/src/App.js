import React from 'react';
import { Routes, Route ,BrowserRouter,Link} from 'react-router-dom';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import './App.css';
import PetForm from './views/PetForm';
import PetTable from './views/PetTable';
import UpdatePet from './views/UpdatePet';
import ShowPet from './views/ShowPet';
function App() {
    return (
    <div className="App">
      {/* <GoToButton/> */}
      <BrowserRouter>
      <Nav title={'Pet Shelter'} className={'votingNav'}  data={'Know a Pet needing a home?'} />



          <Routes>
       <Route element={<PetForm/>} path="/PetForm" exact/>
       <Route element={<PetTable/>} path="/PetTable" exact/>
       <Route element={<PetTable/>} path="/" exact/>
      <Route element={<UpdatePet/>} path="/pet/:id/edit" exact/>
      <Route element={<ShowPet/>} path="/pet/:id" exact/>


         </Routes>  
      </BrowserRouter>        

      <Nav title={''} className={'footerVote'} />
    </div>
    );
}
export default App;

