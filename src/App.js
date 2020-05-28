import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Team from './pages/Team';
import Group from './pages/Group';
import Maps from './pages/Maps';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/success" component={Success} />
            <Route path="/team" component={Team} />
            <Route path="/group" component={Group} />
            <Route path="/maps" component={Maps} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
