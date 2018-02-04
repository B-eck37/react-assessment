import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Task />
        
      </div>
    );
  }
}

export default App;
