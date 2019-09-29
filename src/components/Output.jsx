/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React from 'react'
import MaleCartoon from './MaleCartoon';
import FemaleCartoon from './FemaleCartoon';
import Bubble from './Bubble';
import './Output.css';


export default function Output(props) {
  return (
    <div className="output">
      <Bubble name={props.userName} place={props.place} />
      <a href="https://www.reactriot.com/entries/74-coding-army/vote" target="_blank" rel="noopener noreferrer">
        <button className="hackbit-vote-widget">Vote for Us!!</button>
      </a>
      {props.gender === "Male" ? <MaleCartoon /> : <FemaleCartoon />}
    </div >
  )
}

