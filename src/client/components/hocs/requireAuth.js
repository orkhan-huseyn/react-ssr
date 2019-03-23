import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default function requireAuth(WrappedComponent) {
  class RequireAuth extends React.Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <h1>Loading...</h1>;
        default:
          return <WrappedComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
}
