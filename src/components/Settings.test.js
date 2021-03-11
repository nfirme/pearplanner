import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './Settings';

it("renders Settings component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Settings></Settings>, div)
})