import React from 'react'
import MaleCartoon from './MaleCartoon';
import FemaleCartoon from './FemaleCartoon';
import Bubble from './Bubble';
import './Output.css';

export default function Output() {
  return (
    <div className="output">
      <Bubble />
      <MaleCartoon />
      <FemaleCartoon />
    </div>
  )
}
