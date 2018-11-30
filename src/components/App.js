import React, { Component } from 'react';
import Header from './Header';
import TvShow from './TvShow';
import '../assets/sass/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="[ ui container ]">
          <TvShow />
        </section>
      </div>
    );
  }
}

export default App;
