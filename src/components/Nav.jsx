import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <>
            <header>
                <nav className="homepg-nav">


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
            <h1 className="main-heading"> Welcome To Cartoonify Game </h1>
            <h3 className="sub-heading">Let's play! Submit your answer to the following questions</h3>
            <button className="play-game">PLAY</button>
            </>

        )
    }
}
