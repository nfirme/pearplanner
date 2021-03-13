"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireDefault(require("react"));

var _Assignment = _interopRequireDefault(require("./Assignment"));

var _LoadingGif = _interopRequireDefault(require("./LoadingGif"));

require("./AssignmentList.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const courseColors = ["red", "orange", "yellow", "blue", "purple"];
const token = '15279~bUAbbgLyyiQapBK61lP8Lhz8RpoSgRLx2QajYKb8xtt44BsvONMsXxRmljb8Ds6Q';

class AssignmentList extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "stringToDate", due => {
      //parses date string of form 2021-01-08T07:59:59Z
      if (due == null) {
        return new Date(3000, 0, 0, 0, 0, 0);
      }

      due = due.split("-");
      var temp = due[2];
      due[2] = temp.split("T")[0];
      temp = temp.split("T")[1];
      due[3] = temp.split(":")[0];
      due[4] = temp.split(":")[1];
      due[5] = temp.split(":")[2];

      for (var i = 0; i < 6; i++) {
        due[i] = parseInt(due[i]);
      } //In this date function, January is month 00, Feb 01, etc.


      return new Date(due[0], due[1] - 1, due[2], due[3], due[4], due[5]);
    });

    _defineProperty(this, "callAPIAssignments", async course => {
      const proxyUrl = 'https://cors.bridged.cc/';
      const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses/';

      try {
        let response = await fetch(proxyUrl + targetUrl + course.id + '/assignments/?access_token=' + token + '&per_page=999');

        if (response.ok) {
          var json = await response.json();

          for (var i = 0; i < json.length; i++) {
            json[i]["due_at"] = this.stringToDate(json[i]["due_at"]);
            json[i]["course_id"] = course["courseTitle"];
            json[i]["color"] = course["color"];
          }

          return json;
        } else {
          console.log(response);
          return [];
        }
      } catch (err) {
        console.log(err);
        return [];
      }
    });

    _defineProperty(this, "callAPICourses", async () => {
      const proxyUrl = 'https://cors.bridged.cc/';
      const targetUrl = 'https://canvas.calpoly.edu/api/v1/courses.json?access_token=' + token;

      try {
        let response = await fetch(proxyUrl + targetUrl);

        if (response.ok) {
          var json = await response.json();
          var currentTerm = this.getCurrentTerm(json);
          var res = await this.getFinalList(json, currentTerm); //remove assignments with due dates in the past

          res = res.filter(function (a) {
            return Number(a.due_at) > Number(new Date());
          }); //sort remaining by due date

          res.sort(function (a, b) {
            return Number(a.due_at) - Number(b.due_at);
          });
          const fin = res.map(c => {
            return /*#__PURE__*/_react.default.createElement(_Assignment.default, {
              assignmentName: c.name,
              courseName: c.course_id,
              courseColor: c.color,
              key: c.id,
              id: c.id,
              onChange: this.handleChange,
              complete: false
            });
          });
          this.setState({
            assignmentList: fin
          });
        } else {
          console.log("ERROR IN RETRIEVING API DATA");
        }
      } catch (err) {
        console.log(err);
      }
    });

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      assignmentList: [/*#__PURE__*/_react.default.createElement(_LoadingGif.default, {
        key: "0"
      })]
    };
  }

  componentDidMount() {
    this.callAPICourses();
    this.forceUpdate();
  }

  getCurrentTerm(json) {
    var n = [];
    var currentTerm = 0;

    for (var i = 0; i < json.length; i++) {
      if (json[i].enrollment_term_id > currentTerm) {
        currentTerm = json[i].enrollment_term_id;
      }

      if (json[i].name == null) {
        json[i].name = "";
      }

      n = json[i].name.split("-");
      json[i].courseName = n[n.length - 1];
      n = json[i].name.split(/[\s-]/);
      json[i].courseTitle = n.slice(0, 2).join(" ");
    }

    return currentTerm;
  }

  async getFinalList(json, currentTerm) {
    var res = [];
    var colorIterator = 0;

    for (var i = 0; i < json.length; i++) {
      if (json[i].enrollment_term_id == currentTerm) {
        json[i].color = courseColors[colorIterator];
        res = res.concat(await this.callAPIAssignments(json[i]));
        colorIterator++;
      }
    }

    return res;
  }

  AnyIncomplete() {
    var anyIncomplete = false;

    if (this.state.assignmentList.length == 0) {
      return /*#__PURE__*/_react.default.createElement("div", null);
    }

    this.state.assignmentList.forEach(a => {
      anyIncomplete = anyIncomplete || !a.props.complete;
    });

    if (anyIncomplete) {
      return /*#__PURE__*/_react.default.createElement("h2", {
        style: {
          textAlign: "center"
        }
      }, "Assignments");
    }

    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  AnyCompleted() {
    var anyCompleted = false;

    if (this.state.assignmentList.length == 0) {
      return /*#__PURE__*/_react.default.createElement("div", null);
    }

    this.state.assignmentList.forEach(a => {
      anyCompleted = anyCompleted || a.props.complete;
    });

    if (anyCompleted) {
      return /*#__PURE__*/_react.default.createElement("h2", null, "Completed");
    }

    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  handleChange(childId) {
    if (childId != null) {
      var list = this.state.assignmentList;
      const index = list.findIndex(x => x.key == childId);
      var temp = list[index];
      list[index] = /*#__PURE__*/_react.default.createElement(_Assignment.default, {
        assignmentName: temp.props.assignmentName,
        courseName: temp.props.courseName,
        courseColor: temp.props.courseColor,
        key: temp.props.id,
        id: temp.props.id,
        onChange: this.handleChange,
        complete: !temp.props.complete
      }); //list.splice(index, 1)

      this.setState(() => ({
        assignmentList: list
      }));
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "AssignmentList"
    }, this.AnyIncomplete(), /*#__PURE__*/_react.default.createElement("div", {
      className: "assignment-section"
    }, this.state.assignmentList.filter(x => !x.props.complete)), this.AnyCompleted(), this.state.assignmentList.filter(x => x.props.complete));
  }

}

var _default = AssignmentList;
exports.default = _default;