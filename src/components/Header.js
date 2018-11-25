import React from 'react'
import logo from '../assets/img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="ui inverted vertical center aligned segment">
          <img src={logo} className="App-logo" alt="TVMaze" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
          TVMaze
          </a>
      </header>
    )
  }
}

export default Header;
