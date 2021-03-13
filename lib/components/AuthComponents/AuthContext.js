"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuth = useAuth;
exports.AuthProvider = AuthProvider;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _firebase = _interopRequireDefault(require("../../firebase"));

var _GetCourses = _interopRequireDefault(require("../utils/GetCourses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AuthContext = /*#__PURE__*/(0, _react.createContext)(null);

function useAuth() {
  return (0, _react.useContext)(AuthContext);
}

function AuthProvider(_ref) {
  let {
    children
  } = _ref;
  const [user, setUser] = (0, _react.useState)(null);
  const [loading, setLoading] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    const unsubscribe = _firebase.default.auth().onAuthStateChanged(fireUser => {
      setUser(fireUser);
      setLoading(false);
      if (user) signInUser(user);
    });

    return () => unsubscribe();
  });
  const providerValue = {
    user
  };
  return /*#__PURE__*/_react.default.createElement(AuthContext.Provider, {
    value: providerValue
  }, !loading && children);
}

AuthProvider.propTypes = {
  children: _propTypes.default.array
}; // Checks for user entry in DATABASE.
// If user exists, call updateExistingUser.
// If new user, call setupNewUser.

function signInUser(user) {
  const userRef = _firebase.default.database().ref('users/' + user.uid);

  userRef.get().then(snapshot => {
    snapshot.exists() ? updateExistingUser(user) : setupNewUser(user);
  }).catch(error => {
    console.error(error);
  });
} // Prompt user for Canvas token, then set user's entry
// in DATABASE to include the token.


function setupNewUser(user) {
  const token = prompt("Please enter your Canvas token:");

  let userRef = _firebase.default.database().ref('users/' + user.uid);

  userRef.set({
    canvas_token: token,
    email: user.email
  });
  userRef = _firebase.default.database().ref('users/' + user.uid + '/canvas_token');
  userRef.get().then(snapshot => {
    (0, _GetCourses.default)(snapshot.val(), user.uid);
  });
} // Do some stuff, like calling the Canvas API to get fresh data.


function updateExistingUser(user) {
  console.log(user);
}