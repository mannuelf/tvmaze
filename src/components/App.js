import React, { Component } from 'react';
import SearchTvShows from './SearchTVShows';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../assets/sass/App.sass';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Header />
          <section className="ui container">

          </section>
        </div>
      );
  }
}

export default App;
