import React from 'react'
import './FemaleCartoon.css'

export default function FemaleCartoon() {
  return (
    <div>
      <div className="girl">
        <div className="head">
          <div className="hair">
            <div className="triangle left"></div>
            <div className="triangle center"></div>
            <div className="triangle right"></div>
          </div>
          <div className="face">
            <div className="content">
              <div className="left eye"></div>
              <div className="right eye"></div>
              <div className="dot right"></div>
              <div className="dot left"></div>
              <div className="nose"></div>
              <div className="ear left"></div>
              <div className="ear right"></div>
              <div className="mouse"></div>
            </div>
          </div>
        </div>
        <div className="torso"></div>
        <div className="hand left"></div>
        <div className="hand right"></div>
        <div className="hip"></div>
        <div className="legs">
          <div className="leg left"></div>
          <div className="leg right"></div>
        </div>
        <div className="feet"></div>
      </div>

    </div>
  )
}
