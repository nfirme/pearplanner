"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./LandingStyles.css");

var _pearHalfOutlineWhite = _interopRequireDefault(require("../images/pear-half-outline-white.svg"));

var _LoginModal = _interopRequireDefault(require("./AuthComponents/LoginModal"));

var _SignUpModal = _interopRequireDefault(require("./AuthComponents/SignUpModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LandingPage() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "./LandingStyles.css"
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
    integrity: "sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/_react.default.createElement("header", {
    className: "showcase"
  }, /*#__PURE__*/_react.default.createElement(_LoginModal.default, {
    variant: "danger",
    buttonText: "Go to App >",
    buttonStyle: "app-button"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _pearHalfOutlineWhite.default,
    className: "logo",
    alt: "Pear Planner"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "title",
    style: {
      color: 'white'
    }
  }, "Welcome to PearPlanner"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text",
    style: {
      color: 'white'
    }
  }, "Planning made simple."), /*#__PURE__*/_react.default.createElement(_LoginModal.default, {
    variant: "primary",
    buttonText: "Sign In"
  }), /*#__PURE__*/_react.default.createElement(_SignUpModal.default, null))), /*#__PURE__*/_react.default.createElement("section", {
    className: "services bg-dark"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container grid-3 center"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-school fa-3x"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Centralize"), /*#__PURE__*/_react.default.createElement("p", null, "Integrate content from all of your institutions.")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-chalkboard-teacher fa-3x"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Coursework"), /*#__PURE__*/_react.default.createElement("p", null, "Condense your coursework access points.")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-google fa-3x"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Google"), /*#__PURE__*/_react.default.createElement("p", null, "Import your google contacts and integrate your google calendar.")))), /*#__PURE__*/_react.default.createElement("section", {
    className: "about bg-light"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-laptop-code fa-10x"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "About Us"), /*#__PURE__*/_react.default.createElement("p", null, "PearPlanner is a content integration platform for work, school and life. Built by students for students, PearPlanner optimizes your workflow and helps you get stuff done."))))), /*#__PURE__*/_react.default.createElement("footer", {
    className: "center bg-dark"
  }, /*#__PURE__*/_react.default.createElement("p", null, "PearPlanner \xA9 2021")));
}

var _default = LandingPage;
exports.default = _default;