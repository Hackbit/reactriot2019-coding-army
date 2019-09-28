import React, { Component } from 'react'
import './Nav.css'
import Form from '../component/Form';

export default class LetsPlay extends Component {
  state = {
    shown: true,
  };

  render() {
    return (
      <div className="LetsPlay"
        style={{ display: this.state.shown ? 'true' : 'none' }}>
        <h1 className="main-heading"> Welcome To Cartoonify Game </h1>
        <h3 className="sub-heading">Let's play! Submit your answer to the following questions</h3>
        <button className="play-game"
          onClick={() => this.setState({ shown: !this.state.shown })}>
          PLAY
        </button>
      </div>
    )

  };

}
