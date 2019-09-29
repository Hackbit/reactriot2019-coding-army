import React, { Component } from 'react';
import './Nav.css';



export default class Nav extends Component {

    render() {
        return (
            <>
                <header>
                    <nav className="homepg-nav">
                        <ul class="list-container">

                            <a class="link" href="https://hackbit.github.io/reactriot2019-coding-army/."><i class="fas fa-home"></i> Home</a>
                            <a class="link" href="https://www.reactriot.com/entries/74-coding-army/vote"><i class="fas fa-check-circle"></i> Vote for us</a>
                            <a class="link" href="https://www.reactriot.com/entries/74-coding-army/vote"><i class="fas fa-thumbs-up"></i> Like our repo</a>
                            <a class="link" href="https://github.com/reenaishtiaq"><i class="fas fa-users"></i> Follow us</a></ul>
                    </nav>

                </header>
            </>

        )
    }
}
