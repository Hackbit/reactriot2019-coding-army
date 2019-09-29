import React, { Component } from 'react';
import './Nav.css';
import logo from '../images/logo.png';



export default class Nav extends Component {

    render() {
        return (
            <>
                <header>
                    <nav className="homepg-nav">
                        <ul className="list-container">
                            <a className="link" href="google.com"><i className="fas fa-home"></i> Home</a>
                            <a className="link" href="google.com"><i className="fas fa-check-circle"></i> Vote for us</a>
                            <a className="link" href="google.com"><i className="fas fa-thumbs-up"></i> Like our repo</a>
                            <a className="link" href="https://github.com/reenaishtiaq"><i className="fas fa-users"></i> Follow us</a>
                        </ul>
                        <div className="logo">
                            <img src={logo} alt="logo" width="100px" height="80px" />;
                        </div>
                    </nav>

                </header>
            </>

        )
    }
}
