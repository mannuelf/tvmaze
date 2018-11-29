import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hyphenateQueryForApiCall } from '../helpers'
import { Link } from 'react-router-dom';
import { removeHTMLTags } from '../helpers'
import { setTvShow } from '../actions';
import axios from 'axios';

class SearchTvShows extends Component {
  constructor() {
    super();

    this.state = {
      tv_show: '',
      episodes: ''
    }
  }

  search() {
    let query = this.state.tv_show;
    let formattedQuery = hyphenateQueryForApiCall(query);
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${formattedQuery}`;

    axios.get(url)
      .then((response) => {
        let data = response.data;
        this.setState({tv_show: data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search a TV Show"
          onChange={ event => this.setState({ tv_show: event.target.value })}
        />
        <button onClick={() => this.search()}>
          Search
        </button>
      </div>
    );
  }
}

export default connect(null, { setTvShow })(SearchTvShows);
