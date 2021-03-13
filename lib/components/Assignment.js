"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Assignment.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Assignment(props) {
  const [complete, setComplete] = (0, _react.useState)(props.complete);
  let titleClass = complete ? "mb-0 complete" : "mb-0";

  function handleClick() {
    setComplete(!complete);
    props.onChange(props.id);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card flex-row flex-wrap to-do-card",
    onClick: handleClick,
    id: props.id,
    style: {
      borderRadius: 16,
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "color-block",
    style: {
      backgroundColor: "var(--" + props.courseColor + ")",
      borderRadius: 16
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-block"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: titleClass
  }, props.assignmentName), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, props.courseName)));
}

Assignment.propTypes = {
  assignmentName: _propTypes.default.string,
  courseName: _propTypes.default.string,
  courseColor: _propTypes.default.string,
  complete: _propTypes.default.bool,
  id: _propTypes.default.number,
  onChange: _propTypes.default.func
};
var _default = Assignment;
exports.default = _default;