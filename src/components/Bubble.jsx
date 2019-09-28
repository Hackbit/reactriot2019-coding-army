import './Bubble.css'

import React from 'react'

const name = "ABC";
const place = "XYZ";

export default function Bubble() {
  return (
    <div className="speech-bubble">
      <h1>Hi! I'm {name}. I'm enjoying my summer at my Favorite place {place}. </h1>
    </div>
  )
}
