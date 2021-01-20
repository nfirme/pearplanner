import React, {useState} from 'react'
import './Assignment.css'

function Assignment(props) {

    const [complete, setComplete] = useState(props.complete);
    let titleClass = complete ? "mb-0 complete" : "mb-0";

    function handleClick() {
        setComplete(!complete);
        props.onChange(props.id);
    }

    return (
        <div className="card flex-row flex-wrap to-do-card" onClick={handleClick} id={props.id}>
            <div className="color-block" style={{backgroundColor: "var(--" + props.courseColor + ")"}}>
            </div>
            <div className="text-block">
                <h4 className={titleClass}>{props.task}</h4>
                <p className="card-text">{props.courseCode}</p>
            </div>
      </div>
    )
}

export default Assignment;