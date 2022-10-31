import React from 'react'
import logo from "/../images/shared/logo.svg"
import bars from "/../images/shared/icon-hamburger.svg"
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} className="logo"/>
            <hr className='line' />
            <div className='home-link'>
                <ul className="navbar-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destinations">Destination</Link></li>
                    {/* <li>Destination</li> */}
                    <li>Crew</li>
                    <li>Technology</li>
                </ul>
            </div>
            <img src={bars} className="bars"/>
        </nav>
    )
}