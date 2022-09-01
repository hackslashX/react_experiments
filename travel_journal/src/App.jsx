import React from "react"
import { Fragment } from "react"

import NavbarComponent from "./components/NavbarComponent"
import PostComponent from "./components/PostComponent"
import data from "./data"

export default function App() {
  const posts = data.map((post) => {
    return (
      <PostComponent 
        data={post}
      />
    )
  }
  )
  return (
    <Fragment>
      <NavbarComponent />
      <div className="posts">
        {posts}
      </div>
    </Fragment>
  )
}