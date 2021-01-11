import React from 'react'
import CourseCard from './components/CourseCard'

const courses = [
    {
        courseCode: "CSC 308",
        courseTitle: "Software Engineering I",
        courseColor: "red"
    },
    {
        courseCode: "IME 314",
        courseTitle: "Engineering Economics",
        courseColor: "orange"
    },
    {
        courseCode: "BIO 213",
        courseTitle: "Life Science",
        courseColor: "yellow"
    },
    {
        courseCode: "PSY 350",
        courseTitle: "Teamwork",
        courseColor: "green"
    },
    {
        courseCode: "CSC 305",
        courseTitle: "Individual Software Design",
        courseColor: "blue"
    },
    {
        courseCode: "CSC 430",
        courseTitle: "Programming Languages",
        courseColor: "purple"
    }
]

const courseList = courses.map((c) =>
    <CourseCard 
      courseCode={c.courseCode} 
      courseTitle={c.courseTitle} 
      courseColor={c.courseColor}
    />
);

function callAPI() {
    console.log("Hello world");
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses.json?access_token=15279~bUAbbgLyyiQapBK61lP8Lhz8RpoSgRLx2QajYKb8xtt44BsvONMsXxRmljb8Ds6Q'
    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(json => console.log(json));
}

function App() {
    return (
        <div className="App">
            {courseList}
            <button onClick={callAPI}>Call API</button>
        </div>
    );
}

export default App;