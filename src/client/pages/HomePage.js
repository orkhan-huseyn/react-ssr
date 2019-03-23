import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home__title">I am home component!</h1>
        <p className="Home__text">I am rendered on server</p>
        <button className="waves-effect waves-light btn">See users</button>
      </div>
    );
  }
}

export default {
  component: HomePage
};
