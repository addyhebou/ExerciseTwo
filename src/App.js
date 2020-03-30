import React from 'react';
// Styles
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// Components
import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return (
      <div className = "SiteWrapper">
        <Header/>
        <Router>
          <Switch>
            <Route path = "/">
              <Home/>
            </Route>
          </Switch>
        </Router>
        <Home />
      </div>
  );
}

export default App;
