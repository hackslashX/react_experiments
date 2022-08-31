import React from "react"

import Card from "./components/Card"
import LightCard from "./components/LightCard"

export default function AppComponent() {
  return (
    <div className="main">
      <div className="div-border"><Card mode="card--dark"/></div>
      <div className="div-border"><Card mode="card--light"/></div>
    </div>
  )
}