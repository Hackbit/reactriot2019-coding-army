import React, { Component } from 'react';
import Output from './Output';
import logo from '../images/logo.png';
import ReactDOM from 'react-dom';
import './Form.css';



var userName = "";
var place = "";
var gender = "";
var color = "";

class PlacesOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Mountain' };
    }

    handleSubmit = (event) => {
        this.setState({
            value: event.target.value
        }, () => {
            console.log(this.state.value);
            place = this.state.value;
        })
    }

    render() {
        return (
            <div >
                <label className="place">
                    Which is your favorite Place
                      <select value={this.state.value} onChange={this.handleSubmit} required>
                        <option value="Mountain">Mountain</option>
                        <option value="Beach">Beach</option>
                        <option value="Desert">Desert</option>
                        <option value="Valley">Valley</option>
                    </select>
                </label>
            </div>
        );
    }
}
class GenderOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
    }
    updateGender = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedOption: event.target.value
        });
        gender = event.target.value
    };
    render() {
        return (
            <div>
                <label className="gender">Choose your Gender </label>
                <label>
                    <input type="radio" name="gender"
                        value="Male"
                        checked={this.state.selectedOption === "Male"}
                        onChange={this.updateGender} />
                    Male
                        </label>
                <label>
                    <input type="radio" name="gender"
                        value="Female"
                        checked={this.state.selectedOption === "Female"}
                        onChange={this.updateGender} />
                    Female
                        </label>
            </div>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleSubmit = (event) => {
        this.setState({ value: event.target.value }, () => {
            console.log(this.state.value);
            userName = this.state.value;
        });
    }

    render() {
        return (
            <label>
                Name:
            <input required type="text" value={this.state.value} onChange={this.handleSubmit} placeholder="Your good name here.." />
            </label>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);

class Form extends Component {
    state = {
        shown: true,
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    toggleShown = (e) => {
        this.setState({ shown: !this.state.shown });
    }

    updateColor = (e) => {
        console.log(e.target.value);
        this.setState({
            color: e.target.value,
        });
        color = e.target.value;
    }
    render() {
        const { shown } = this.state;
        return (
            <div>
                {
                    shown ? (
                        < form onSubmit={(e) => this.toggleShown(e)} >
                            <div>
                                <img className="logo" src={logo} alt="logo" width="100px" height="80px" />;
                                <h1>CARTOONIFY GAME FORM</h1>
                            </div>
                            <div className="main">
                                <div>
                                    <NameForm />,
                                </div>
                                <div>
                                    <GenderOptions />
                                </div>
                                <div>
                                    <label className="color">Select your favorite Color</label>

                                    <input type="color"
                                        value={this.state.value}
                                        onChange={this.updateColor}
                                        required
                                    ></input>
                                </div>
                                <PlacesOptions />
                                <input className="submit" type="submit"></input>
                            </div>
                        </form >
                    ) : (
                            <Output userName={userName} place={place} gender={gender} color={color} style={{}} />
                        )
                }
            </div>
        )
    };
}

export default Form;
