import React from "react"
import TrollLogo from "../assets/troll.svg"

export default function NavbarComponent() {
    return (
        <nav className="nav">
            <div className="nav--logo">
                <img src={TrollLogo} className="nav--image"></img>
                <span className="nav--title">Meme Generator</span>
            </div>
            <div className="nav--links">
                <span className="nav--link">React Course - Project 3</span>
            </div>
        </nav>
    )
}