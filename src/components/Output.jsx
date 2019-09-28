import React from 'react'
import MaleCartoon from './MaleCartoon';
import Bubble from './Bubble';
import './Output.css';

export default function Output() {
  return (
    <div className="output">
      <Bubble />
      <MaleCartoon />
    </div>
  )
}
