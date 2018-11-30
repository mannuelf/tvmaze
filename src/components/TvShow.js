import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTvShow } from '../actions';
import Loading from './Loading';
import { removeHTMLTags } from '../helpers';
import axios from 'axios';

class TvShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tv_show: '',
      episodes: ''
    }
  }

  getDefaultShowState() {
    let query = 'the-powerpuff-girls';
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${query}`;

    axios.get(url)
      .then((response) => {
        this.setState({
          loading: false,
          tv_show: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDefaultEpisodeState() {
    let query = 6771;
    const url = `http://api.tvmaze.com/shows/${query}/episodes`;

    axios.get(url)
      .then((response) => {
        this.setState({
          loading: false,
          episodes: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getDefaultShowState();
    this.getDefaultEpisodeState();
  }

  render() {
    let { loading, tv_show, episodes } = this.state;
    if(loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div>
          <div className="ui grid stackable">

            <aside className="six wide column">
              <figure className="ui-cover-img">
                <img
                  src={tv_show.image.original}
                  alt={tv_show.name}
                  />
              </figure>
            </aside>

            <article className="ten wide column">

              <hgroup>
                <h1>{tv_show.name}</h1>
              </hgroup>
              <p>{removeHTMLTags(tv_show.summary)}</p>

              <div className="row">
                <hgroup>
                  <h1>Episodes</h1>
                  {/* {
                    this.props.episodes.map((episode, index) => {
                      return (
                        <div key={index}>
                          <p>{episode.summary}</p>
                        </div>
                      );
                    })
                  } */}
                </hgroup>
              </div>

            </article>

          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(TvShow);
