import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTvShow } from '../actions';
import Loading from './Loading';
import { removeHTMLTags } from '../helpers';
import EpisodesList from './EpisodesList';
import axios from 'axios';

class EpisodeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tv_show: '',
      episodes: '',
      episode: ''
    }
  }

  getDefaultEpisodeState() {
    let query = 6771;
    let season = 1;
    let episode = 1;
    const url = `http://api.tvmaze.com/shows/${query}/episodebynumber?season=${season}&number=${episode}`;

    axios.get(url)
      .then((response) => {
        this.setState({
          loading: false,
          episode: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getDefaultEpisodeState();
  }

  render() {
    let { loading, tv_show, episodes, episode } = this.state;
    if( ! loading) {
      return (
        <div>
          <div className="ui grid stackable">

            <aside className="six wide column">
              <figure className="ui-cover-img">
                <img
                  src={episode.image.original}
                  alt={episode.name}
                  />
              </figure>
            </aside>

            <article className="ten wide column ui-episode-detail">
              <hgroup>
                <h1 className="ui-episode-detail__heading--extra-large">{episode.name}</h1>
              </hgroup>

              <p className="ui-episode-detail__paragraph--large">
                {removeHTMLTags(episode.summary)}
              </p>

            </article>

          </div>
        </div>
      )
    } else {
      return (
        <Loading />
      )
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(EpisodeDetail);
