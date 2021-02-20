import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"

function Footer() {

    return (
        <div className="footer">
            <Link to={"/landingPage"}>Sign Out</Link>
        </div>
    )
}
export default Footer;