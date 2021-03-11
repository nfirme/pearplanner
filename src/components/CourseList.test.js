import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './CourseList';

it("renders CourseList component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<CourseList></CourseList>, div)
})