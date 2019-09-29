import React, { Component } from 'react';
import './Nav.css'

export default class Nav extends Component {

    render() {
        return (
            <>
                <header>
                    <nav className="homepg-nav">
                        <ul className="list-container">
                            <a className="link" href="google.com"><i className="fas fa-home"></i> Home</a>
                            <a className="link" href="google.com"><i className="far fa-check-circle"></i> Vote for us</a>
                            <a className="link" href="google.com"><i className="far fa-thumbs-up"></i> Like our repo</a>
                            <a className="link" href="google.com"><i className="fas fa-users"></i> Follow us</a>
                        </ul>
                    </nav>
                </header>
            </>

        )
    }

}
