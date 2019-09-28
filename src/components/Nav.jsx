import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="homepg-nav">
          <ul className="list-container">
            <a className="link" href="google.com"><i class="fas fa-home"></i> Home</a>
            <a className="link" href="google.com"><i class="far fa-check-circle"></i> Vote for us</a>
            <a className="link" href="google.com"><i class="far fa-thumbs-up"></i> Like our repo</a>
            <a className="link" href="google.com"><i class="fas fa-users"></i> Follow us</a>
          </ul>
        </nav>
      </header>
    )
  }
}
