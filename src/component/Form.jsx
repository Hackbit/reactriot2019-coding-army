import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <div className="backgroundImage">
                <form>
                    <div className="headind">
                        <h1>CARTOONIFY GAME FORM</h1>
                    </div>
                    <div className="main">
                        <label className="name">Full Name</label>
                        <br />
                        <input type="text" className="nametwo" placeholder="Your good name here.."></input>
                        <br />
                        <br />
                        <label className="gender">Choose your Gender</label>
                        <br />
                        <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female
                        <br />
                        <label className="color">Select your favorite Color</label>
                        <input type="color"></input>
                        <br />
                        <br />
                        <label className="place">Which is your favorite Place</label>
                        <select>
                            <option value="mountain">Mountain</option>
                            <option value="beach">Beach</option>
                            <option value="desert">Desert</option>
                            <option value="valley">Valley</option>
                            <option value="forest">Forest</option>
                        </select>
                        <br />
                        <input className="submit" type="submit"></input>
                    </div>
                </form>
            </div>
        );

    }
}



export default Form;
