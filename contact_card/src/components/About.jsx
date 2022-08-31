import React from "react"

export default function About({mode = 'card--light'}) {
    return (
        <div className={`card--description ${mode}`}>
            <h1 className={`card--description--title ${mode}`}>About</h1>
            <p className={`card--description--paragraph ${mode}`}>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}