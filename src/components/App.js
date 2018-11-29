import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTvShow } from '../actions';

import axios from 'axios';
import '../assets/sass/App.sass';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tv_show: '',
      episodes: ''
    }
  }

  search() {
    let { query } = this.state
    console.log('search: this.state', this.state)
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${query}`;
    axios.get(url)
      .then(response => {
        console.log(response);
        let data = response.data.slice(0,1)
        this.props.setTvShow(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">

        <header className="App-header ui inverted vertical center aligned segment">
          <div className="ui container">
            <Link
              className="App-link"
              to="/">Maze</Link>
          </div>
          <input type="text" placeholder="Search a TV Show"
            onChange={
              event => this.setState({ tv_show: event.target.value })
            }
          />
          <button
            onClick={() => this.search()}>
              Search
          </button>
        </header>

        <section className="ui container">

        </section>

      </div>
    );
  }
}

export default connect(null, { setTvShow })(App);
