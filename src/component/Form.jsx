import React from "react";
import "./Form.css";
import { CirclePicker } from "react-color";

function handleChange(color, event) {
  console.log(color);
}
function Form() {
  return (
    <form>
      <h1>CARTOONIFY GAME FORM</h1>

      <div className="main">
        <label className="name">Full Name </label>
        <br />
        <input
          type="text"
          className="nametwo"
          placeholder="Your good name here..."
        ></input>
        <br />
        <label className="gender">Choose Your Gender </label>
        <br />
        <input type="radio" name="gender" value="male" /> Male
        <br />
        <input type="radio" name="gender" value="female" /> Female
        <br />
        <label className="color">Select Your Favorite Color </label>
        <CirclePicker className="colorChoose" onChange={handleChange} />
        <br />
        <label className="place">Which Is Your Favorite Place</label>
        <br />
        <select>
          <option value="mountain">Mountain</option>
          <option value="beeach">Beach</option>
          <option value="desert">Desert</option>
          <option value="valley">Valley</option>
          <option value="forest">Forest</option>
        </select>
        <br />
        <input className="submit" type="submit"></input>
      </div>
    </form>
  );
}

export default Form;
