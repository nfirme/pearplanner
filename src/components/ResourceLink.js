import React from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase'
import { useAuth } from './AuthComponents/AuthContext'
import './ResourceLink.css'

function ResourceLink(props) {

    const { user } = useAuth();

    function handleClick() {
        console.log("delete resource");
        console.log(props.resourceId);
        const refStr = 'users/' + user.uid + '/courses/' + props.courseId + '/resources/' + props.resourceId;
        firebase.database().ref(refStr).remove();
    }

    return (
        <li className="ResourceLink">
            <a href={props.link}>{props.name}</a>
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