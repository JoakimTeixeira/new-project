import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, path }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      path={path}
      render={() => (isLoggedIn ? children : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
