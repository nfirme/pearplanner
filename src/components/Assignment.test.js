import React from 'react';
import ReactDOM from 'react-dom';
import Assignment from './Assignment';

it("renders Assignment component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Assignment></Assignment>, div)
})