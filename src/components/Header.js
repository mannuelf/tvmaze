import React from 'react'
import { Link } from 'react-router-dom'
import SearchTvShows from './SearchTVShows';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header ui inverted vertical center aligned segment">
          <div className="ui container">
          <Link
            className="App-link"
            to="/">Maze</Link>
          </div>

          <SearchTvShows />
      </header>
    )
  }
}

export default Header;
