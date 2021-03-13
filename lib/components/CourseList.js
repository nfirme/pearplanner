"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

var _CourseCard = _interopRequireDefault(require("./CourseCard"));

var _LoadingGif = _interopRequireDefault(require("./LoadingGif"));

require("./CourseList.css");

var _NewCourseModal = _interopRequireDefault(require("./FormComponents/NewCourseModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const courseColors = ["red", "orange", "yellow", "blue", "purple"];

class CourseList extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      courseList: /*#__PURE__*/_react.default.createElement(_LoadingGif.default, null)
    });

    _defineProperty(this, "callAPI", async () => {
      const proxyUrl = 'https://cors.bridged.cc/';
      const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses.json?access_token=15279~bUAbbgLyyiQapBK61lP8Lhz8RpoSgRLx2QajYKb8xtt44BsvONMsXxRmljb8Ds6Q';

      try {
        let response = await fetch(proxyUrl + targetUrl);

        if (response.ok) {
          var n = [];
          var colorIterator = 0;
          var currentTerm = 0;
          var col = "";
          var json = await response.json();
          console.log(json);

          for (var i = 0; i < json.length; i++) {
            if (json[i].enrollment_term_id > currentTerm) {
              currentTerm = json[i].enrollment_term_id;
            }

            n = json[i].name.split("-");
            json[i].courseName = n[n.length - 1];
            n = json[i].name.split(/[\s-]/);
            json[i].courseTitle = n.slice(0, 2).join(" ");
          }

          const res = json.map(c => {
            if (c.enrollment_term_id == currentTerm) {
              col = courseColors[colorIterator % courseColors.length];
              colorIterator++;
              return /*#__PURE__*/_react.default.createElement(_CourseCard.default, {
                key: c.id,
                courseCode: c.courseName,
                courseTitle: c.courseTitle,
                courseColor: col
              });
            }
          });
          this.setState({
            courseList: res
          });
        } else {
          console.log("ERROR IN RETRIEVING API DATA");
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.callAPI();
    this.forceUpdate();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "CourseList"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: {
        textAlign: "center"
      }
    }, "My Classes"), /*#__PURE__*/_react.default.createElement(_NewCourseModal.default, null), this.state.courseList);
  }

}

var _default = CourseList;
exports.default = _default;