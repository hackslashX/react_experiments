import React from "react"
import Card01 from "../assets/cardimage01.png"
import Star from "../assets/star.svg"

export default function CardComponent(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "sold out"
    } else if (props.location === "Online") {
        badgeText = 'online'
    }
    return (
        <div className="card">
            <div className="card--image">
                <img className="card--image--img" src={props.coverImg}></img>
                {badgeText && <span className="card--image--tag">{badgeText}</span>}
            </div>
            <div className="card--subinfo">
                <img className="card--subinfo--star" src={Star}></img>
                <span className="paright-3">{props.stats.rating}</span>
                <span className="paright-3 gray">({props.stats.reviewCount})</span>
                <span className="paright-3 gray">·</span>
                <span className="paright-3 gray">{props.location}</span>
                <p className="card--title">{props.title}</p>
                <div className="card--subinfo--2">
                    <span className="weight600">From ${props.price}</span>
                    <span className=""> / person</span>
                </div>
            </div>
        </div>
    )
}