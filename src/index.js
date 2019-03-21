import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

import Routes from "./client/Routes";

const app = express();

app.use(express.static("public"));

// redirect all routes to index.html
// for react router to deremine where to go
app.get("*", (req, res) => {
  // get store
  const store = createStore();
  // if router matches any routes, return loadData function
  // which dispatches action to store
  const promises = matchRoutes(Routes, req.path).map(function({ route }) {
    return route.loadData ? route.loadData(store) : null;
  });

  // then wait for all async actions to finish
  // then render the component and return html
  // to the browser
  Promise.all(promises).then(function() {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
