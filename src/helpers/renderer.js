import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

import Routes from "../client/Routes";

export default function(req, store, context) {
  // get rendered react component
  // as pure string with ReactDOM.server
  // this includes html with given redux state
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  // return pure html with
  // react rendered content in it
  // include obtained redux state into html
  // for state rehydration
  return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE = ${serialize(store.getState())};</script>
      <script src="bundle.js" defer></script>
    </body>
    </html>
  `;
}
