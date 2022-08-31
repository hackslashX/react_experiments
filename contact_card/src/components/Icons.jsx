import React from "react"
import Email from '../assets/email.svg'
import LinkedIn from "../assets/linkedin.svg"
import LinkedIn2 from "../assets/linkedin2.svg"
import Twitter from "../assets/twitter.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import GitHub from "../assets/github.svg"

function EmailIcon() {
    return <img src={Email}></img>
}

function LinkedInIcon() {
    return <img src={LinkedIn}></img>
}

function LinkedInIcon2() {
    return <img src={LinkedIn2}></img>
}

function TwitterIcon() {
    return <img src={Twitter}></img>
}

function FacebookIcon() {
    return <img src={Facebook}></img>
}

function InstagramIcon() {
    return <img src={Instagram}></img>
}

function GitHubIcon() {
    return <img src={GitHub}></img>
}

export {EmailIcon, LinkedInIcon, LinkedInIcon2, TwitterIcon, FacebookIcon, InstagramIcon, GitHubIcon}