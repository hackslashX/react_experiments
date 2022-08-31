import React, {Fragment} from "react"

import ProfileImage from "./Image"
import ProfileInfo from "./ProfileInfo"
import { EmailButton, LinkedInButton } from "./Buttons"
import About from "./About"
import Interests from "./Interests"
import SocialLinks from "./Social"

export default function Card({mode = 'card-dark'}) {
  return (
    <div className={`card ${mode}`}>
      <ProfileImage />
      <Fragment>
        <ProfileInfo mode={`${mode}`}/>
        <div className="btn-container">
          <EmailButton />
          <LinkedInButton />
        </div>
        <About mode={`${mode}`}/>
        <Interests mode={`${mode}`}/>
        <SocialLinks mode={`${mode}`}/>
      </Fragment>
    </div>
  )
}
