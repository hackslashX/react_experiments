import React, {Fragment} from "react"

import ProfileImage from "./Image"
import ProfileInfo from "./ProfileInfo"
import { EmailButton, LinkedInButton } from "./Buttons"
import About from "./About"
import Interests from "./Interests"
import SocialLinks from "./Social"

export default function LightCard() {
  return (
    <div className="card card-light">
      <ProfileImage />
      <Fragment>
        <ProfileInfo mode='card--light'/>
        <div className="btn-container">
          <EmailButton />
          <LinkedInButton />
        </div>
        <About mode='card--light'/>
        <Interests mode='card--light'/>
        <SocialLinks mode='card--light'/>
      </Fragment>
    </div>
  )
}
