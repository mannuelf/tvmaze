import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Loading from './Loading';
import { removeHTMLTags } from '../helpers';
import axios from 'axios';

class EpisodeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      episodes: ''
    }
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
    this.getDefaultEpisodeState();
  }

  render() {
    let { loading, episodes } = this.state;
    console.log('episodes', episodes);
    if ( ! loading) {
      return (
        <Fragment>
          <div className="ui-episodes-list">
            {
              episodes.map((episode, index) => (
                <div key={ index } className="ui-episodes-list__item">
                  <h3 className="ui-episodes-list__header">
                    <Link to={`/tv-detail/${episode.id}`}>
                      {episode.name}
                    </Link>
                  </h3>
                  <p className="ui-episodes-list__paragraph">
                    { removeHTMLTags(episode.summary) }
                  </p>
                </div>
              ))
            }
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

export default EpisodeList;
