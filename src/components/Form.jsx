import React, { Component } from 'react';
import Output from './Output';
import logo from '../images/logo.png';
import ReactDOM from 'react-dom';
import './Form.css';



var userName = "";
class PlacesOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Mountain' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value);
    }

    render() {
        return (
            <div >
                <label className="place">
                    Which is your favorite Place
            <select value={this.state.value} onChange={this.handleSubmit}>
                        <option value="Mountain">Mountain</option>
                        <option value="Beach">Beach</option>
                        <option value="Desert">Desert</option>
                        <option value="Valley">Valley</option>
                        <option value="Forest">Forest</option>
                    </select>
                </label>
                {/* <input type="submit" value="Submit" onClick={this.handleSubmit} /> */}
            </div>
        );
    }
}
class GenderOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Male"
        };
    }
    updateGender = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedOption: event.target.value
        });
        setTimeout(() => {
            console.log("You have submitted:", this.state.selectedOption);

        }, 1000)
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ value: event.target.value });
        console.log(this.state.value);
        userName = this.state.value;
    }

    render() {
        return (
            <label>
                Name:
            <input type="text" value={this.state.value + " "} onChange={this.handleSubmit} placeholder="Your good name here.." />
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
        name: '',
        gender: '',
        color: '',
        place: '',
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    toggleShown = (e) => {
        this.setState({ shown: !this.state.shown });
    }
    updateColor = (e) => {
        this.setState({
            color: e.target.value,
        });
        console.log(this.state.color);

    }
    render() {
        const { shown } = this.state;
        return (
            <div>
                {
                    shown ? (
                        < form >
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
                                    ></input>
                                </div>
                                <PlacesOptions />
                                <input className="submit" type="submit" onClick={(e) => this.toggleShown(e)}></input>
                            </div>
                        </form >
                    ) : (
                            <Output userName={userName} style={{}} />
                        )
                }
            </div>
        )
    };
}

export default Form;
