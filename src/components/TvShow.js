import React from 'react';
import { removeHTMLTags } from '../helpers'

class TvShow extends React.Component {
  render() {
    const data = this.props.tvShows;
    const images = data.image;
    return (
      <div>
        <div className="ui grid stackable">

            <aside className="six wide column">
              <figure className="ui-cover-img">
                <img
                  src=""
                  alt={data.name}
                  />
              </figure>
            </aside>

            <article className="ten wide column">
              <hgroup>
                <h1>{data.name}</h1>
              </hgroup>
              <p>{removeHTMLTags(data.summary)}</p>

              {/* <EpisodeDetails data={data} /> */}

              <div className="row">
                <hgroup>
                  <h1>Episodes</h1>
                </hgroup>

                <EpisodeList />

              </div>
            </article>

          </div>
      </div>
    );
  }
}

export default TvShow;
