"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _react2 = _interopRequireWildcard(require("@fullcalendar/react"));

var _daygrid = _interopRequireDefault(require("@fullcalendar/daygrid"));

var _timegrid = _interopRequireDefault(require("@fullcalendar/timegrid"));

var _interaction = _interopRequireDefault(require("@fullcalendar/interaction"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { INITIAL_EVENTS, createEventId } from './event-utils'
class EventCalendar extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      weekendsVisible: true,
      currentEvents: []
    });

    _defineProperty(this, "handleWeekendsToggle", () => {
      this.setState({
        weekendsVisible: !this.state.weekendsVisible
      });
    });

    _defineProperty(this, "handleDateSelect", selectInfo => {
      let title = prompt('Please enter a new title for your event');
      let calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection

      if (title) {
        calendarApi.addEvent({
          // id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        });
      }
    });

    _defineProperty(this, "handleEventClick", clickInfo => {
      if (confirm("Are you sure you want to delete the event '".concat(clickInfo.event.title, "'"))) {
        clickInfo.event.remove();
      }
    });

    _defineProperty(this, "handleEvents", events => {
      this.setState({
        currentEvents: events
      });
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "calendar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "calendar-main"
    }, /*#__PURE__*/_react.default.createElement(_react2.default, {
      plugins: [_daygrid.default, _timegrid.default, _interaction.default],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      navLinks: true,
      initialView: "dayGridMonth",
      eventDurationEditable: true,
      eventStartEditable: true,
      eventResizableFromStart: true,
      displayEventTime: true,
      displayEventEnd: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: this.state.weekendsVisible // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
      ,
      select: this.handleDateSelect,
      eventContent: renderEventContent // custom render function
      ,
      eventClick: this.handleEventClick,
      eventsSet: this.handleEvents // called after events are initialized/added/changed/removed

      /* you can update a remote database when these fire:
      eventAdd={function(){}}
      eventChange={function(){}}
      eventRemove={function(){}}
      */

    })));
  }

  renderSidebar() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "demo-app-sidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "demo-app-sidebar-section"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Instructions"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Select dates and you will be prompted to create a new event"), /*#__PURE__*/_react.default.createElement("li", null, "Drag, drop, and resize events"), /*#__PURE__*/_react.default.createElement("li", null, "Click an event to delete it"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "demo-app-sidebar-section"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      checked: this.state.weekendsVisible,
      onChange: this.handleWeekendsToggle
    }), "toggle weekends")), /*#__PURE__*/_react.default.createElement("div", {
      className: "demo-app-sidebar-section"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "All Events (", this.state.currentEvents.length, ")"), /*#__PURE__*/_react.default.createElement("ul", null, this.state.currentEvents.map(renderSidebarEvent))));
  }

}

exports.default = EventCalendar;

function renderEventContent(eventInfo) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("b", null, eventInfo.timeText), /*#__PURE__*/_react.default.createElement("i", null, eventInfo.event.title));
}

function renderSidebarEvent(event) {
  return /*#__PURE__*/_react.default.createElement("li", {
    key: event.id
  }, /*#__PURE__*/_react.default.createElement("b", null, (0, _react2.formatDate)(event.start, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })), /*#__PURE__*/_react.default.createElement("i", null, event.title));
}