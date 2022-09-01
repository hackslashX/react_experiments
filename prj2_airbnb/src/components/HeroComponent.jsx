import React from "react"

import PhotoGrid from "../assets/photo-grid.png"

export default function HeroComponent() {
    return (
        <div className="hero">
            <img src={PhotoGrid} className="hero--image"></img>
            <div className="hero--section">
                <h1 className='hero--section--title'>Online Experiences</h1>
                <p className='hero--section--para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}