import React from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase'
import { useAuth } from './AuthComponents/AuthContext'
import './ResourceLink.css'

function ResourceLink(props) {

    let linkStr = "";

    if(props.link.includes("http://") || props.link.includes("https://")) {
        linkStr = props.link;
    }  else {
        linkStr = "http://" + props.link;
    }

    const { user } = useAuth();

    function handleClick() {
        const refStr = 'users/' + user.uid + '/courses/' + props.courseId + '/resources/' + props.resourceId;
        firebase.database().ref(refStr).remove();
    }

    return (
        <li className="ResourceLink">
            <a target="_blank" rel="noreferrer" href={linkStr}>{props.name}</a>
            <span className="delete-btn" onClick={handleClick}>✕</span>
        </li>
    )
}

ResourceLink.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    resourceId: PropTypes.string,
    courseId: PropTypes.string
}

export default ResourceLink;