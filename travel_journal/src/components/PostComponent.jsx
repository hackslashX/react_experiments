import React from "react"

import PinIcon from "../assets/pin.svg"

export default function PostComponent(data) {
    const props = data.data
    return (
        <div className="post">
            <img src={props.img} alt={props.altimg} className="post--image"></img>
            <div className="post--data">
                <div className="post--location">
                    <img src={PinIcon} alt="location-icon" className="post--icon"></img>
                    <span className="post--country">{props.country}</span>
                    <a className="post--googlemaps" href={props.mapurl}>View on Google Maps</a>
                </div>
                <h1 className="post--title">{props.title}</h1>
                <h3 className="post--dates">{props.startdate} - {props.enddate}</h3>
                <p className="post--description">{props.description}</p>
            </div>
        </div>
    )
}