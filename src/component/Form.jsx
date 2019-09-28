import React from 'react';
import './Form.css';
import { CirclePicker } from 'react-color';

function handleChange(color, event) {
    console.log(color);
}
function Form() {

    return (
        // <div className="backgroundImage">
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
                            <CirclePicker className="colorChoose" onChange={handleChange} />
                            <br />
                            <label className="place">Favorite Place</label>
                            <br />
                            <select>
                                <option value="mountain">Mountain</option>
                                <option value="beeach">Beeach</option>
                                <option value="desert">Desert</option>
                                <option value="valley">Valley</option>
                                <option value="forest">Forest</option>
                            </select>
                            <br />
                            <label className="food">Favorite Food</label>
                            <br />                   
                            <input type="radio" name="food" value="chicken" /> Chicken<br />
                            <input type="radio" name="food" value="fish" /> Fish <br />
                            <input type="radio" name="food" value="vegetable" /> Vegetable <br />
                            <input type="radio" name="food" value="fruits" /> Fruits<br />
                            <input type="radio" name="food" value="dessert" /> Dessert<br />
                           
                            <input className="submit" type="submit"></input>
</div>
            </form>
                // {/* </div> */}
                 );
            
        }
        
        
        
export default Form;