import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends React.Component {

  componenDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <h2>Here are some users</h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
