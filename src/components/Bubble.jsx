import './Bubble.css'

import React from 'react'


export default function Bubble(props) {
  return (
    <div className="speech-bubble">
      <h1>Hi! I'm {props.name}. I'm enjoying my summer at my Favorite place {props.place}. </h1>
    </div>
  )
}
