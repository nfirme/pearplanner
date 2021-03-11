import React from 'react';
import ReactDOM from 'react-dom';
import SettingsForm from './SettingsForm';

it("renders SettingsForm component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<SettingsForm></SettingsForm>, div)
})