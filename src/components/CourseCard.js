import React from 'react'
import './CourseCard.css'
import CourseCardDropdown from './CourseCardDropdown'

function CourseCard(props) {

    const idStr = props.courseCode.replace(/ /g,"_");

    return (
        <div className="CourseCard">
            <div className="card flex-row flex-wrap course-card">
                <a className="card-block stretched-link text-decoration-none" data-toggle="collapse" href={"#" + idStr}/>
                <div className="card-header" style={{backgroundColor: "var(--" + props.courseColor + ")"}}/>
                <div className="card-block px-2 py-3">
                    <h4 className="card-title mb-0">{props.courseCode}</h4>
                    <p className="card-text">{props.courseTitle}</p>
                </div>
            </div>

            <CourseCardDropdown id={idStr} />
        </div>

    )
}

export default CourseCard;

