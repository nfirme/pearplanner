import React from 'react';
import ReactDOM from 'react-dom';
import LoadingGif from './LoadingGif';

it("renders LoadingGif component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<LoadingGif></LoadingGif>, div)
})