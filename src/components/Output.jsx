/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React from 'react'
import MaleCartoon from './MaleCartoon';
import FemaleCartoon from './FemaleCartoon';
import Bubble from './Bubble';
import './Output.css';
import beachImage from './image/beach.jpg';
import desertImage from './image/desert.jpg';
import mountImage from './image/mountains.jpg';
import valleyImage from './image/park.jpg';


export default function Output(props) {
  document.documentElement.style
    .setProperty('--shirt', props.color);
  const getBackgroundImage = (place) => {
    let backgroundImage = beachImage;

    console.log({ place })

    switch (place) {
      case 'Desert':
        backgroundImage = desertImage;
        break;

      case 'Mountain':
        backgroundImage = mountImage;
        break;


      case 'Valley':
        backgroundImage = valleyImage;
        break;


      case 'Beach':
        backgroundImage = beachImage;
        break;

      default:
        backgroundImage = mountImage;

        break;
    }

    return backgroundImage;

  }

  return (
    <div className="output" style={{
      backgroundImage: `url(${getBackgroundImage(props.place)})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}>
      <Bubble name={props.userName} place={props.place} />
      <a href="https://www.reactriot.com/entries/74-coding-army/vote" target="_blank" rel="noopener noreferrer">
        <button className="hackbit-vote-widget">Vote for Us!!</button>
      </a>
      {props.gender === "Male" ? <MaleCartoon /> : <FemaleCartoon />}
    </div >
  )
}
