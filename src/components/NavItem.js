/* eslint react/jsx-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'

function NavItem(props) {

    const pix = props.d.map(str =>
        <path fillRule="evenodd" d={str}></path>
    );

    return (

        <a className={props.active} href={props.link}>
            <svg width="4em" height="4em" viewBox="0 0 16 16" className={props.name} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {pix}
            </svg>
        </a>

    )
}

NavItem.propTypes = {
    active: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    d: PropTypes.array
  }

export default NavItem;