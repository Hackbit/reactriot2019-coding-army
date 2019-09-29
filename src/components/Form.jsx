import React, { Component } from 'react';
import Output from './Output';

import './Form.css';

class Form extends Component {
    state = {
        shown: true,
    }
    toggleShown = () => {
        this.setState({ shown: !this.state.shown })
    }
    render() {
        const { shown } = this.state;
        return (
            <div>
                {
                    shown ? (
                        < form >
                            <h1>CARTOONIFY GAME FORM</h1>
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
                                <input className="submit" type="submit" onClick={this.toggleShown}></input>
                            </div>
                        </form >
                    ) : (
                            <Output />
                        )
                }
            </div>
        )
    };
}



export default Form;

