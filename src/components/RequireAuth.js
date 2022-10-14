import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";

const RequireAuth = ({ currentUser, children }) => {
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }
  return children;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(RequireAuth);
