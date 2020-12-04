import './styles/App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './pages/Home';
import Istruzioni from './pages/Istruzioni';
import Game from './pages/Game';
import { useEffect, useState } from 'react'
import LostPage from './pages/LostPage'
import WinPage from './pages/WinPage'



function App() {

  useEffect(() => {
    
  },[]);

  return (
    <Router>
      <div className="App">
        <Route path = "/" exact render = {() => <Home />}/>
        <Route path = "/istruzioni" render = {() => <Istruzioni /> }/>
        <Route path = "/game" render = {() => <Game/>}/>
        <Route path = "/LostPage" render = {() => <LostPage/>} />
        <Route path = "/WinPage" render = {() => <WinPage/>} />
      </div>
    </Router>
  );
}

export default App;
