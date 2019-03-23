import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

import Routes from "./client/Routes";

const app = express();

// redirect client request which goes to /api
// to real api url
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public"));

// redirect all routes to index.html
// for react router to deremine where to go
app.get("*", function(req, res) {
  // get store
  const store = createStore(req);
  // if router matches any routes, return loadData function
  // which dispatches action to store
  const promises = matchRoutes(Routes, req.path)
    .map(function({ route }) {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(function(promise) {
      if (promise) {
        // no matter what, always resolve
        // the innert promise
        return new Promise(function(resolve) {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // then wait for all async actions to finish
  // then render the component and return html
  // to the browser
  Promise.all(promises).then(function() {
    const context = {};
    const content = renderer(req, store, context);

    // if there is a <Redirect/> component
    // then static router context will be populated
    // with properties such as, url, location etc.
    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
