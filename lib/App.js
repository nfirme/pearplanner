"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _AssignmentList = _interopRequireDefault(require("./components/AssignmentList"));

var _NavBar = _interopRequireDefault(require("./components/NavBar"));

var _CourseListNew = _interopRequireDefault(require("./components/CourseListNew"));

var _EventCalendar = _interopRequireDefault(require("./components/EventCalendar"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

var _LandingPage = _interopRequireDefault(require("./components/LandingPage"));

var _SettingsNew = _interopRequireDefault(require("./components/SettingsNew"));

var _AuthContext = require("./components/AuthComponents/AuthContext");

var _PrivateRoute = _interopRequireDefault(require("./components/utils/PrivateRoute"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Our components!
// Import CSS!
function Layout() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}

function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_AuthContext.AuthProvider, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _LandingPage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: Layout
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "main-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main"
  }, /*#__PURE__*/_react.default.createElement(_PrivateRoute.default, {
    exact: true,
    path: "/app",
    component: _CourseListNew.default
  }), /*#__PURE__*/_react.default.createElement(_PrivateRoute.default, {
    exact: true,
    path: "/classes",
    component: _CourseListNew.default
  }), /*#__PURE__*/_react.default.createElement(_PrivateRoute.default, {
    exact: true,
    path: "/todo",
    component: _AssignmentList.default
  }), /*#__PURE__*/_react.default.createElement(_PrivateRoute.default, {
    exact: true,
    path: "/calendar",
    component: _EventCalendar.default
  }), /*#__PURE__*/_react.default.createElement(_PrivateRoute.default, {
    exact: true,
    path: "/settings",
    component: _SettingsNew.default
  }))))));
}

var _default = App;
exports.default = _default;