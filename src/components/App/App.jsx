import React from 'react';
import axios from 'axios';
import './App.css';
import{ HashRouter as Router, Route, Link} from 'react-router-dom';

import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../Thankyou/Thankyou';


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
      <Link to="/Supported">Supported</Link>
      <Link to="Comments">Comments</Link>
      <Link to="/Review">Review</Link>
      <Link to="ThankYou">ThankYou</Link>
      </nav>
        
      <Route exact path="/Understanding">
       <Understanding />
      </Route>

      <Route exact path="/Feelings">
      <Feelings />
      </Route>

      <Route exact path="/Supported">
      <Supported />
      </Route>

      <Route exact path="/Comments">
      <Comments />
      </Route>

      <Route exact path="/Review">
      <Review />
      </Route>

      <Route exact path="/ThankYou">
      <ThankYou />
      </Route>

      </Router>
    </div>

  );
}

export default App;
