import React, { Component } from 'react';
import Header from './Header';
import TvShow from './TvShow';
import '../assets/sass/App.sass';
import EpisodeDetail from '../components/EpisodeDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="[ ui container ]">
          <TvShow />
          <EpisodeDetail />
        </section>
      </div>
    );
  }
}

export default App;
