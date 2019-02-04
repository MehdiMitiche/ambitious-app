import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import Nav from './components/Nav';
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path='/' component = {Home} />
          <Route exact path='/profile' component = {Profile} />
          <Route exact path='/about' component = {About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
