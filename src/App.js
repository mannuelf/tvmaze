import React, { Component } from 'react';
import Header from './components/Header'
import './css/App.css';
import 'semantic-ui-react';

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
