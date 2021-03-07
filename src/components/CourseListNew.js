import React, { useContext, useState, useEffect } from 'react'
import CourseCard from './CourseCard'
import NewCourseModal from './FormComponents/NewCourseModal'
import UserContext from './AuthComponents/UserContext'
import firebase from '../firebase'
import './CourseList.css'

function CourseList() {

    const { user } = useContext(UserContext);
    const [state, setState] = useState([]);
    const userRef = firebase.database().ref('users/' + user.uid + '/courses');

    useEffect(() => {
        userRef.once('value', (snapshot) => {
            const courses = Object.values(snapshot.val());
            const courseCards = courses.map(c => {
                const resources = getResourceValues(c);
                return <CourseCard 
                    key={c.id}
                    courseId={c.id}
                    courseCode={c.courseName} 
                    courseTitle={c.courseTitle}
                    courseColor={c.color}
                    resources={resources}
                />
            })
            courseCards.sort();
            setState(courseCards);
        });
    }, [state, setState])
    
    return (
        <div className="CourseList">
            <h2>My Classes</h2>
            <NewCourseModal courseState={{state: state, setState: setState}}/>
            {state}
        </div>
    )
}

function getResourceValues(course) {
    if (Object.prototype.hasOwnProperty.call(course, 'resources')) {
        return Object.values(course.resources);
    } else {
        return [];
    }
}

export default CourseList;