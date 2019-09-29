import React, { Component } from 'react';
import './Nav.css';



export default class Nav extends Component {

    render() {
        return (
            <>
                <header>
                    <nav className="homepg-nav">
                        <ul className="list-container">

                            <a className="link" href="https://hackbit.github.io/reactriot2019-coding-army/."><i className="fas fa-home"></i> Home</a>
                            <a className="link" href="https://www.reactriot.com/entries/74-coding-army/vote"><i className="fas fa-check-circle"></i> Vote for us</a>
                            <a className="link" href="https://www.reactriot.com/entries/74-coding-army/vote"><i className="fas fa-thumbs-up"></i> Like our repo</a>
                            <a className="link"
                                href="https://github.com/reenaishtiaq" target="_blank"><i className="fas fa-users"></i> Follow us</a></ul>
                    </nav>

                </header>
            </>

        )
    }
}
