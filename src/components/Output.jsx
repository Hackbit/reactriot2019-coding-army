import React from 'react'
import MaleCartoon from './MaleCartoon';
import FemaleCartoon from './FemaleCartoon';
import Bubble from './Bubble';
import './Output.css';

export default function Output(props) {
  return (
    <div className="output">
      <Bubble name={props.userName} place={props.place} />
      {props.gender === "Male" ? <MaleCartoon /> : <FemaleCartoon />}


    </div>
  )
}
