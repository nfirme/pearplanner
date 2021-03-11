import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

it("renders NavBar component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar></NavBar>, div)
})