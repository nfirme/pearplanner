import React from 'react';
import ReactDOM from 'react-dom';
import AssignmentList from './AssignmentList';

it("renders AssignmentList component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<AssignmentList></AssignmentList>, div)
})