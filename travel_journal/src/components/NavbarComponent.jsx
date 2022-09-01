import React from "react"

import WorldIcon from "../assets/world.svg"

export default function NavbarComponent() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={WorldIcon}></img>
            <span className="navbar--title">my travel journal.</span>
        </nav>
    )
}