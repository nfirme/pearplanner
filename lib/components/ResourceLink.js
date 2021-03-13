"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _firebase = _interopRequireDefault(require("../firebase"));

var _AuthContext = require("./AuthComponents/AuthContext");

require("./ResourceLink.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ResourceLink(props) {
  let linkStr = "";

  if (props.link.includes("http://") || props.link.includes("https://")) {
    linkStr = props.link;
  } else {
    linkStr = "http://" + props.link;
  }

  const {
    user
  } = (0, _AuthContext.useAuth)();

  function handleClick() {
    const refStr = 'users/' + user.uid + '/courses/' + props.courseId + '/resources/' + props.resourceId;

    _firebase.default.database().ref(refStr).remove();
  }

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "ResourceLink"
  }, /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: linkStr
  }, props.name), /*#__PURE__*/_react.default.createElement("span", {
    className: "delete-btn",
    onClick: handleClick
  }, "\u2715"));
}

ResourceLink.propTypes = {
  link: _propTypes.default.string,
  name: _propTypes.default.string,
  resourceId: _propTypes.default.string,
  courseId: _propTypes.default.string
};
var _default = ResourceLink;
exports.default = _default;