import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hyphenateQueryForApiCall } from '../helpers'

import { setTvShow } from '../actions';
import defaultTvShowData from '../data/tv-show';
import defaultEpisodesData from '../data/episodes';
import axios from 'axios';

class SearchTvShows extends Component {
  constructor(props) {
    super(props);

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
        this.props.setTvShow(data);
        this.setState({tv_show: data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    let INITIAL_STATE_TV_SHOW = defaultTvShowData;
    let INITIAL_STATE_EPISODES = defaultEpisodesData;
    this.setState({
      tv_shows: INITIAL_STATE_TV_SHOW,
      episodes: INITIAL_STATE_EPISODES
    });
    console.log('componentDidMount', this.props.state);
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
