import React from "react"
import { TwitterIcon, FacebookIcon, InstagramIcon, GitHubIcon, LinkedInIcon2 } from "./Icons"

function SocialLinks({mode = 'card--dark'}) {
    return (
        <div className={`social-links ${mode}`}>
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon2 />
            <GitHubIcon />
        </div>
    )
}

export default SocialLinks