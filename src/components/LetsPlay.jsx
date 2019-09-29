import React, { Component } from 'react'
import './Nav.css'
import Form from './Form';

export default class LetsPlay extends Component {
  state = {
    shown: true,
  };

  toggleShown = () => {
    this.setState({ shown: !this.state.shown })
  }
  render() {
    const { shown } = this.state;

    return (
      <div>

        {
          shown ? (
            <div className="LetsPlay">
              <h1 className="main-heading"> Welcome To Cartoonify Game </h1>
              <h3 className="sub-heading">Let's play! Submit your answer to the following questions</h3>
              <button className="play-game"
                onClick={this.toggleShown}>PLAY</button>
            </div >
          ) : (
              <Form />
            )
        }
      </div>
    )
  };
}
