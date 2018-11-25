import React, { Component } from 'react';
import Header from './components/Header'
import './assets/sass/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
