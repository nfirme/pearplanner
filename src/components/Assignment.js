import React, {useState} from 'react'
import './Assignment.css'
import PropTypes from 'prop-types'

function Assignment(props) {

    const [complete, setComplete] = useState(props.complete);
    let titleClass = complete ? "mb-0 complete" : "mb-0";

    function handleClick() {
        setComplete(!complete);
        props.onChange(props.id);
    }

    return (
        <div className="card flex-row flex-wrap to-do-card" onClick={handleClick} id={props.id} style={{borderRadius: 16, marginTop: 2}}>
            <div className="color-block" style={{backgroundColor: "var(--" + props.courseColor + ")", borderRadius: 16}}>
            </div>
            <div className="text-block">
                <h4 className={titleClass}>{props.assignmentName}</h4>
                <p className="card-text">{props.courseName}</p>
            </div>
      </div>
    )
}

Assignment.propTypes = {
    assignmentName: PropTypes.string,
    courseName: PropTypes.string,
    courseColor: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.number,
    onChange: PropTypes.func
  }

export default Assignment;
