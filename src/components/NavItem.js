import React from 'react'
import './NavBar.css'

function NavItem(props) {

    const pix = props.d.map(str =>
        <path fillRule="evenodd" d={str}></path>
    );

    return (

        <a className={props.active} data-toggle="pill" href={props.link} class="text-success">
            <svg width="3em" height="4em" viewBox="0 0 16 16" className={props.name} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {pix}
            </svg>
        </a>

    )
}

export default NavItem;