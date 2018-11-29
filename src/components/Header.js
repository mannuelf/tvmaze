import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="App-header ui inverted vertical center aligned segment">
          <div className="ui container">
          <Link
            className="App-link"
            to="/">Maze</Link>
          </div>
      </header>
    )
  }
}

export default Header;
