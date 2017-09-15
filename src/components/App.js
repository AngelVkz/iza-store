import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './App.css';
import Header from './Header'
import Body from './body'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
          <Header />
          <Body />
      </div>
    );
  }
}

export default App;
