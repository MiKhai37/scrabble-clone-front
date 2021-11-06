import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../Contexts/authContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const authContext = useContext(AuthContext)
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      authContext.isLoggedIn && restricted ?
        <Redirect to="/dashboard" />
        : <Component {...props} />
    )} />
  );
};

export default PublicRoute;