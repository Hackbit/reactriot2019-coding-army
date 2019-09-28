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
                        <div>
                            <label className="name">Full Name</label>
                            <input type="text" className="nametwo" placeholder="Your good name here.."></input>
                        </div>
                        <div>
                            <label className="gender">Choose your Gender</label>
                            <input type="radio" name="gender" value="male" /> Male
                            <input type="radio" name="gender" value="female" /> Female
                        </div>
                        <div>

                            <label className="color">Select your favorite Color</label>
                            <input type="color"></input>
                        </div>
                        <div>
                            <label className="place">Which is your favorite Place</label>
                            <select>
                                <option value="mountain">Mountain</option>
                                <option value="beach">Beach</option>
                                <option value="desert">Desert</option>
                                <option value="valley">Valley</option>
                                <option value="forest">Forest</option>
                            </select>
                        </div>
                        <input className="submit" type="submit"></input>
                    </div>
                </form>
            </div>
        );

    }
}



export default Form;
