import React from "react";

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true;
  return <h1>Oops! Page not found!</h1>;
}

export default {
  component: NotFoundPage
};
