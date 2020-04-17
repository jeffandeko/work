import React from 'react';
import './App.css';
// import Facebook from './Components/facebook'
import Google from './Components/googleloging'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Google}>
          </Route>
          <Route path='/'>

          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
