import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './pages/Home';
import Istruzioni from './pages/Istruzioni';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/istruzioni" component = {Istruzioni}></Route>
        <Route path = "/game" component = {Game}></Route>
      </div>
    </Router>
  );
}

export default App;
