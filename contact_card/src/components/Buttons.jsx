import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailIcon, LinkedInIcon } from "./Icons"

function EmailButton() {
    return (
        <button className="btn btn-white"><EmailIcon />Email</button>
    )
}

function LinkedInButton() {
    return (
        <button className="btn btn-blue"><LinkedInIcon />LinkedIn</button>
    )
}

export {EmailButton, LinkedInButton}