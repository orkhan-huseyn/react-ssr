// Startup code for the client side javasctip
import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/Home";

ReactDOM.hydrate(<Home />, document.getElementById("root"));
