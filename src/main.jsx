import React from "react"
import { ReactDOM } from "react"


import Description from "./Description"
import IconLinks from "./IconLinks"

export default function Main(){
  return(
    
    <div className="main-container">
      <img src="src/assets/profile-pic.png" className="profile-pic"/>
      <Description/>
      <IconLinks/>
    </div>

  )
}
