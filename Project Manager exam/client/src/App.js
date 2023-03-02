import React from 'react';
import { Routes, Route ,BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import ProjectForm from './components/ProjectForm';
import ProjectStatus from './views/ProjectStatus';


function App() {
    return (
    <div className="App">
      <h1 className='h1Title' >Project Manager</h1>
      <BrowserRouter>



          <Routes>
       <Route element={<ProjectForm/>} path="/ProjectForm" exact/>
       <Route element={<ProjectForm/>} path="/" exact/>
       <Route element={<ProjectStatus/>} path="/ProjectStatus" exact/>



            
         </Routes>  
      </BrowserRouter>        

    </div>
    );
}
export default App;

