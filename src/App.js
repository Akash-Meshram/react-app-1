import './App.css';
import Person from './components/Person';
import React, { Component } from 'react';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Person name = 'Akash'/>

      </div>
    );
  }
}

export default App;
