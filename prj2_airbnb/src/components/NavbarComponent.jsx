import React from "react"
import airbnblg from "../assets/airbnb.svg"

export default function NavbarComponent() {
    return (
        <nav className="navbar">
            <img src={airbnblg} className="nav--logo"></img>
        </nav>
    )
}