// Startup code for the client side javasctip
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import axios from "axios";

import Routes from "./Routes";
import rootReducer from "./reducers";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE || {},
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
