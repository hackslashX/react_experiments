import React from "react"
import reactlogo from "../assets/react.svg"

function NavbarComponent() {
    return (
        <header className="navbar">
            <div className="navlogo">
                <img src={reactlogo}></img>
                <a>ReactFacts</a>
            </div>
            <div className="navlinks">
                <a>React Course - Project 1</a>
            </div>
        </header>
    )
}

export default NavbarComponent