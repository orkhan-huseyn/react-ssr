import React from "react";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions"
import { renderRoutes } from "react-router-config";

const App = ({ route }) => (
  <div className="App">
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App,
  loadData: function({ dispatch }) {
    return dispatch(fetchCurrentUser());
  }
}
