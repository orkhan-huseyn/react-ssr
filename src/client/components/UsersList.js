import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
