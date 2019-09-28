import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <header>
                <nav className="homepg-nav">

                    <ul className="list-container">
                        <a className="link" href="google.com"><li className="list-item"><i class="fas fa-home"></i> Home</li></a>
                        <a className="link" href="google.com"><li className="list-item"><i class="far fa-check-circle"></i> Vote for us</li></a>
                        <a className="link" href="google.com"><li className="list-item"><i class="far fa-thumbs-up"></i> Like our repo</li></a>
                        <a className="link" href="google.com"><li className="list-item"><i class="fas fa-users"></i> Follow us</li></a>
                    </ul>
                </nav>
            </header>



        )
    }
}