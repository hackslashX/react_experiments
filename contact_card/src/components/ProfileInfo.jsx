import React from "react"

export default function ProfileInfo({mode = 'card--light'}) {
    return (
        <div className={`card--info ${mode}`}>
            <h1 className={`card--info--name ${mode}`}>Laura Smith</h1>
            <a className={`card--info--designation ${mode}`}>Frontend Developer</a>
            <a className={`card--info--url ${mode}`} href="#">anime.website</a>
        </div>
    )
}