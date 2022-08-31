import React from "react"

export default function Interests({mode = 'card--light'}) {
    return (
        <div className={`card--description ${mode}`}>
            <h1 className={`card--description--title ${mode}`}>Interests</h1>
            <p className={`card--description--paragraph ${mode}`}>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
            Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
    )
}