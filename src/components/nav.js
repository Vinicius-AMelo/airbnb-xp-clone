import React from 'react'
import './nav.css'
import logo from './images/airbnb-logo.png'
export default function Nav() {
    return (
        <div>
            <nav id="logo-nav">
                <img src={logo} alt='AirBnB LOGO' id='airnbn-logo'></img>
            </nav>
        </div>

    )
}