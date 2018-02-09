import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';
import Description from './components/Description';
import { Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Task} />
        <Route path='/details/:id' component={Description} />
      </div>
    );
  }
}

export default App;
