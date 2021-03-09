import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard'
import NewCourseModal from './FormComponents/NewCourseModal'
import { useAuth } from './AuthComponents/AuthContext'
import firebase from '../firebase'
import './CourseList.css'

function CourseList() {

    const { user } = useAuth();
    const [state, setState] = useState([]);

    useEffect(() => {
        const userRef = firebase.database().ref('users/' + user.uid + '/courses');
        userRef.once('value', (snapshot) => {
            const courses = snapshot.val() ? Object.values(snapshot.val()) : [];
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
            return () => userRef.off();
            });
    }, [state, setState])
    
    return (
        <div className="CourseList">
            <h2>My Classes</h2>
            <NewCourseModal />
            {state}
        </div>
    )
}

function getResourceValues(course) {
    if (Object.prototype.hasOwnProperty.call(course, 'resources')) {
        return Object.entries(course.resources);
    } else {
        return [];
    }
}

export default CourseList;