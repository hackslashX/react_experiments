import React, {Fragment} from "react"
import MainComponent from "./components/Main"
import NavbarComponent from "./components/Navbar"

import './style.css'

function AppComponent() {
  return (
    <Fragment>
      <NavbarComponent />
      <MainComponent />
    </Fragment>
  )
}

export default AppComponent