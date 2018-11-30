import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setTvShow } from '../actions';
import Loading from './Loading';
import { removeHTMLTags } from '../helpers';
import EpisodesList from './EpisodesList';
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

  componentDidMount() {
    this.getDefaultShowState();
  }

  render() {
    let { loading, tv_show, episodes } = this.state;
    if( ! loading) {
      return (
        <Fragment>
          <div className="ui grid stackable">

            <aside className="six wide column">
              <figure className="ui-cover-img">
                <img
                  src={tv_show.image.original}
                  alt={tv_show.name}
                  />
              </figure>
            </aside>

            <article className="ten wide column ui-episode-detail">

              <h1 className="ui-episode-detail__heading--extra-large">{tv_show.name}</h1>

              <p className="ui-episode-detail__paragraph--large">
                {removeHTMLTags(tv_show.summary)}
              </p>

              <div className="row">
                <h2 className="ui-episode-detail__heading--large">Episodes</h2>
                <EpisodesList episodes={episodes} />
              </div>
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(TvShow);
