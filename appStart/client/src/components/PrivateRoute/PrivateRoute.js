import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import auth from "../../tools/auth";

/**
 * @param props
 * @param props.children
 */
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.any
};

export default PrivateRoute;
