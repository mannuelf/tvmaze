import React, { Component } from 'react';
import Header from './Header';

import '../assets/sass/App.sass';

class App extends Component {
  state = {
    tvShows: {},
    episodes: {}
  }

  componentDidMount() {
    // this.loadTvShow();
  }

  render() {
    return (
      <div className="App">

        <Header />

        <section className="ui container">
        hello
          {/* <TvShow tvShows={this.state.tvShows} /> */}
        </section>

      </div>
    );
  }
}

export default App;
