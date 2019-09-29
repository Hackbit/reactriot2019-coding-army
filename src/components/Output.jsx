/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React from 'react'
import MaleCartoon from './MaleCartoon';
import FemaleCartoon from './FemaleCartoon';
import Bubble from './Bubble';
import './Output.css';
import Desert from '../images/desert.jpg';

export default function Output(props) {
  var bg = '';
  // {
  //   props.place === 'Desert' ? { bg } = '../images/desert.jpg' : { bg } = '';
  // }
  console.log(bg);
  const backgrounStyle = {
    backgroundImage: "url(" + { Desert } + ")"
  }
  return (
    <div className="output" style={{ backgrounStyle }}>
      <Bubble name={props.userName} place={props.place} />
      {props.gender === "Male" ? <MaleCartoon /> : <FemaleCartoon />}


    </div>
  )
}
