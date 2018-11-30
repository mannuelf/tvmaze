import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import { removeHTMLTags } from '../helpers';
import axios from 'axios';

class EpisodeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      episode_id: this.props.match.params.id
    }
  }

  getEpisode() {
    let url = `http://api.tvmaze.com/episodes/${this.state.episode_id}`;
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
    this.getEpisode();
  }

  render() {
    let { loading, episode } = this.state;
    if( ! loading) {
      return (
        <Fragment>
          <Header />
          <div className="[ ui grid stackable ]">

            <aside className="six wide column">
              <figure className="ui-cover-img">
                <img
                  src={episode.image.original}
                  alt={episode.name}
                  />
              </figure>
            </aside>

            <article className="[ ten wide column ] [ ui-episode-detail ]">
              <h1 className="ui-episode-detail__heading--extra-large">
                {episode.name}
              </h1>

              <p className="ui-episode-detail__paragraph--large">
                {removeHTMLTags(episode.summary)}
              </p>
            </article>

          </div>
        </Fragment>
      )
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default EpisodeDetail;
