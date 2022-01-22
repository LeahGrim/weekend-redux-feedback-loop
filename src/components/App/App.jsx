import React from 'react';
import axios from 'axios';
import './App.css';

import Feelings from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding'
import{ HashRouter as Router, Route, Link} from 'react-router-dom';


function App() {

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

      <nav>
      <Link to="/Understanding">Understanding</Link>
      <Link to="/Feelings">Feelings</Link>
      </nav>
        
      <Route exact path="/Understanding">
       <Understanding />
      </Route>

      <Route exact path="/Feelings">
      <Feelings />
      </Route>

      </Router>
    </div>

  );
}

export default App;
