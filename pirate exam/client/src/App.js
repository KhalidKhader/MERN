import React from 'react';
import { Routes, Route ,BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import './App.css';
import PirateForm from './views/PirateForm';
import PirateTeam from './views/PirateTeam';
import ShowPirates from './views/ShowPirates';


function App() {
    return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route element={<PirateForm/>} path="/PirateForm" exact/>
             <Route element={<PirateForm/>} path="/" exact/>
             <Route element={<PirateTeam/>} path="/PirateTeam" exact/>
             <Route element={<ShowPirates/>} path="/AboutCrew/:id" exact/>
         </Routes>  
      </BrowserRouter>        

    </div>
    );
}
export default App;

