import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../AuthComponents/AuthContext'
import PropTypes from 'prop-types'

function PrivateRoute({ component: Component, ...rest }) {

    const { user } = useAuth()
  
    return (
      <Route
        {...rest}
        render={props => {
          return user ? <Component {...props} /> : <Redirect to="/" />
        }}
      ></Route>
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func
}

export default PrivateRoute;
