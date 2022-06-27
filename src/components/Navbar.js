import React from "react"
import AirbnbLogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img className="logo" src={AirbnbLogo}/>
        </nav>
    )
}