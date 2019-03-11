import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import Home from "./client/components/Home";
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
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
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
