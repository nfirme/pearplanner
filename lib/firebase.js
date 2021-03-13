"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
  apiKey: "AIzaSyC5EhJSuUwwW33Kcil-yHu_0Y4Eb2BvBK8",
  authDomain: "pearplanner-4c7fb.firebaseapp.com",
  databaseURL: "https://pearplanner-4c7fb-default-rtdb.firebaseio.com",
  projectId: "pearplanner-4c7fb",
  storageBucket: "pearplanner-4c7fb.appspot.com",
  messagingSenderId: "283665104918",
  appId: "1:283665104918:web:906d9a2e0e5d8a768fb537",
  measurementId: "G-KWR0HLZ6C1"
};

_firebase.default.initializeApp(config);

var _default = _firebase.default;
exports.default = _default;