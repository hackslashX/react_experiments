import React from "react"
import { Fragment } from "react"

import NavbarComponent from "./components/NavbarComponent"
import MemeComponent from "./components/MemeComponent"

export default function App() {
    return (
        <Fragment>
            <NavbarComponent />
            <MemeComponent />
        </Fragment>
    )
}