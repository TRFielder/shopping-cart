import React, { useState } from "react";
import "../styles/header.css"

const Header = (props) => {

    const siteHeader = useState(props.name);

        return (
            <div id="header">
                <div className="innerHeader">
                    <div className="logoContainer">
                        <h1>{siteHeader}</h1>
                    </div>
                </div>
            </div>
        )
}

export default Header;