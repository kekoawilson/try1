import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Router from './components/Router/Router'
// 37E-1


class App extends Component {
  render() {
    return (
        <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/nested'>Nested</Link>
          <Link to='/axios'>Axios</Link>
          <Link to='/redux'>Redux</Link>
          <Link to='/match'>Match</Link>
        </nav>


        {Router}
          
        </div>
    );
  }
}

export default App;
