import './Bubble.css'

import React from 'react'

const place = "XYZ";

export default function Bubble(props) {
  return (
    <div className="speech-bubble">
      <h1>Hi! I'm {props.name}. I'm enjoying my summer at my Favorite place {place}. </h1>
    </div>
  )
}
