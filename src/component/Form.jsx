import React, { Component } from 'react';
import './Form.css';
import { CirclePicker } from 'react-color';

class Form extends Component {
    render() {
        return (
            <div className="backgroundImage">
                <form>
                    <div className="headind">
                        <h1>CARTOONIFY GAME FORM</h1>
                    </div>
                    <div className="main">
                        <label className="name">Name </label>
                        <br />
                        <input type="text" className="nametwo"></input>
                        <br />
                        <label className="gender">Gender </label>
                        <br />
                        <input type="radio" name="gender" value="male" /> Male
                        <br />
                        <input type="radio" name="gender" value="female" /> Female
                        <br />
                        <label className="color">Favorite Color :</label>
                        <CirclePicker className="colorChoose" />
                        <br />
                        <label className="place">Favorite Place</label>
                        <br />
                        <select>
                            <option value="mountain">Mountain</option>
                            <option value="beach">Beach</option>
                            <option value="desert">Desert</option>
                            <option value="valley">Valley</option>
                            <option value="forest">Forest</option>
                        </select>
                        <input className="submit" type="submit"></input>
                    </div>
                </form>
            </div>
        );

    }
}



export default Form;
