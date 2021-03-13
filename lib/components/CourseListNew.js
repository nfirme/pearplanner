"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireWildcard(require("react"));

var _CourseCard = _interopRequireDefault(require("./CourseCard"));

var _NewCourseModal = _interopRequireDefault(require("./FormComponents/NewCourseModal"));

var _AuthContext = require("./AuthComponents/AuthContext");

var _firebase = _interopRequireDefault(require("../firebase"));

require("./CourseList.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CourseList() {
  const {
    user
  } = (0, _AuthContext.useAuth)();
  const [state, setState] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const userRef = _firebase.default.database().ref('users/' + user.uid + '/courses');

    userRef.once('value', snapshot => {
      const courses = snapshot.val() ? Object.values(snapshot.val()) : [];
      const courseCards = courses.map(c => {
        const resources = getResourceValues(c);
        return /*#__PURE__*/_react.default.createElement(_CourseCard.default, {
          key: c.id,
          courseId: c.id,
          courseCode: c.courseName,
          courseTitle: c.courseTitle,
          courseColor: c.color,
          resources: resources
        });
      });
      courseCards.sort();
      setState(courseCards);
      return () => userRef.off();
    });
  }, [state, setState]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "CourseList"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "My Classes"), /*#__PURE__*/_react.default.createElement(_NewCourseModal.default, null), state);
}

function getResourceValues(course) {
  if (Object.prototype.hasOwnProperty.call(course, 'resources')) {
    return Object.entries(course.resources);
  } else {
    return [];
  }
}

var _default = CourseList;
exports.default = _default;