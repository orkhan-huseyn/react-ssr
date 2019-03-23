import React from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => (
      <li className="collection-item" key={admin.id}>
        {admin.name}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h2>Protected list of admins</h2>
        <ul className="collection">{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsListPage)),
  loadData: function({ dispatch }) {
    return dispatch(fetchAdmins());
  }
};
