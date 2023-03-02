import React from 'react';
import { Routes, Route ,BrowserRouter,Link,useNavigate} from 'react-router-dom';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import './App.css';
import GoToButton from './components/GoToButton';
import Polls from './views/Polls';
import ShowOptions from './views/ShowOptions';
import VoteResults from './views/VoteResults';
import VotingForm from './views/VotingForm'


function App() {
    return (
    <div className="App">

      <BrowserRouter>

      <Nav title={'Voting Dojo'} className={'votingNav'} />
      <GoToButton/>


          <Routes>

       <Route element={<ShowOptions/>} path="/ShowOptions/:id" exact/>
       <Route element={<Polls/>} path="/" exact/>
      <Route element={<VotingForm/>} path="/VotingForm" exact/>
       <Route element={<VoteResults/>} path="/VoteResults/:id" exact/>

         </Routes>  
      </BrowserRouter>        

      <Nav title={''} className={'footerVote'} />
    </div>
    );
}
export default App;

