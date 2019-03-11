import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import Routes from "../client/Routes";

export default req => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js" defer></script>
    </body>
    </html>
  `;
};
