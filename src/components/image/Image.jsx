import React from 'react'
import Logo from "./covid.png"

import "./Image.css"

const Image = () => {
    return (
        <div className="Logo">
            <img src={Logo} alt="covid-19"/>
        </div>
    )
}

export default Image;