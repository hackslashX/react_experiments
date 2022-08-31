import React from "react"
import profpic from '../assets/profilepic.jpg'

export default function ProfileImage() {
    return (
        <img className="card--image" src={profpic} alt="profile_picture"></img>
    )
}