import React from 'react';
import ReactDOM from 'react-dom';
import EventCalendar from './EventCalendar';

it("renders EventCalendar component", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<EventCalendar></EventCalendar>, div)
})