import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home__title">I am home component!</h1>
        <p className="Home__text">I am rendered on server</p>
        <button
          className="Home__action"
          onClick={() => console.log("Hi, there!")}
        >
          Press me!
        </button>
      </div>
    );
  }
}

export default {
  component: HomePage
};
