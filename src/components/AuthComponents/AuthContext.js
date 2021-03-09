import React, { useContext, createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../../firebase'
import getCourses from '../utils/GetCourses'
const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(fireUser => {
            setUser(fireUser);
            setLoading(false);
            if (user) signInUser(user);
          });
          return () => unsubscribe();
    }, [])

    const providerValue = { user };

    return (
        <AuthContext.Provider value={providerValue}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.array
}

// Checks for user entry in DATABASE.
// If user exists, call updateExistingUser.
// If new user, call setupNewUser.
function signInUser(user) {
    const userRef = firebase.database().ref('users/' + user.uid)
    userRef.get().then(snapshot => {
      snapshot.exists() ? updateExistingUser(user) : setupNewUser(user);
    }).catch(error => {
      console.error(error);
    });
  }
  
  // Prompt user for Canvas token, then set user's entry
  // in DATABASE to include the token.
  function setupNewUser(user) {
    const token = prompt("Please enter your Canvas token:");
    let userRef = firebase.database().ref('users/' + user.uid)
    userRef.set({
      canvas_token: token,
      email: user.email
    });
    userRef = firebase.database().ref('users/' + user.uid + '/canvas_token');
    userRef.get().then(snapshot => {
      getCourses(snapshot.val(), user.uid)
    });
  }
  
  // Do some stuff, like calling the Canvas API to get fresh data.
  function updateExistingUser(user) {
    console.log(user);
  }