/* eslint react/jsx-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'

function CourseCardDropdown(props) {

    /* 
     * Ideally, this resources array will be a list of objects (consisting of
     * a link and a name) that will come from a fetch call in the CourseCard
     * component which will then be passed down to this component as props.
     */

    const resources = ["Zoom Link", "Syllabus", "Course Outline", "another link", "asdkjfds"];

    const listItems = resources.map((resource) =>
      <li><a href="#">{resource}</a></li>
    );

    return (
        <div className="collapse" id={props.id}>
            <div className="card card-body">
                <h4>Resources</h4>
                <ul>{listItems}</ul>
            </div>
        </div>
    );
}

CourseCardDropdown.propTypes = {
    id: PropTypes.number
}

export default CourseCardDropdown;
