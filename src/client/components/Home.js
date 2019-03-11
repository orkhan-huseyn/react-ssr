import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>I am home component!</h1>
        <p>I am rendered on server</p>
        <button onClick={() => console.log("Hi, there!")}>Press me!</button>
      </div>
    );
  }
}

export default Home;
