import React from 'react';
import { Routes, Route ,BrowserRouter,Link} from 'react-router-dom';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import './App.css';

import MovieTable from './views/MovieTable'
import MovieForm from './views/MovieForm';
import RateTable from './views/RateTable';
import RateForm from './views/RateForm';

function App() {
    return (
    <div className="App">
      <BrowserRouter>
      <Nav title={'Moldy Tomatoes'} className={'votingNav'}  data={'Know a Pet needing a home?'} />



          <Routes>
       <Route element={<RateForm/>} path="/movies/:id/review" exact/>
       <Route element={<RateTable/>} path="/movies/:id" exact/>
      <Route element={<MovieTable/>} path="/" exact/>
      <Route element={<MovieTable/>} path="/movies" exact/>
      <Route element={<MovieForm/>} path="/movies/new" exact/>




         </Routes>  
      </BrowserRouter>        

      <Nav title={''} className={'footerVote'} />
    </div>
    );
}
export default App;

