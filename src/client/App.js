import React from "react";
import Header from "./components/Header";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => (
  <div class="App">
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App
}
