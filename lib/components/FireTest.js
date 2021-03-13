"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _firebase = _interopRequireDefault(require("../firebase"));

require("./FireTest.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/jsx-key: 0 */
class FireTest extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const itemsRef = _firebase.default.database().ref('users/user001/courses');

    itemsRef.on('value', snapshot => {
      const data = snapshot.val();
      console.log(Object.values(data));
      this.setState({
        items: Object.values(data),
        isLoaded: true
      });
    });
  }

  render() {
    const isLoaded = this.state.isLoaded;

    const listItems = /*#__PURE__*/_react.default.createElement("ul", null, this.state.items.map(item => /*#__PURE__*/_react.default.createElement("li", null, item.name)));

    const loadingAnimation = /*#__PURE__*/_react.default.createElement("div", {
      className: "lds-ring"
    }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null));

    return isLoaded ? listItems : loadingAnimation;
  }

}

var _default = FireTest;
exports.default = _default;