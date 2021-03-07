/* eslint react/jsx-key: 0, */
import React from 'react'
import PropTypes from 'prop-types'
import NewResourceModal from './FormComponents/NewResourceModal';

function CourseCardDropdown(props) {

    const resourceLinks = props.resources.map(r => {
        return <li><a href={r.link}>{r.name}</a></li>
    })

    return (
        <div className="collapse" id={props.id}>
            <div className="card card-body" style={{borderRadius: 16, marginBottom: 10}}>
                <h4 style={{textAlign: "center"}}>Resources</h4>
                <NewResourceModal courseId={props.courseId}/>
                <ul>{resourceLinks}</ul>
            </div>
        </div>
    );
    
}

CourseCardDropdown.propTypes = {
    id: PropTypes.number,
    courseId: PropTypes.string,
    resources: PropTypes.array
}

export default CourseCardDropdown;
