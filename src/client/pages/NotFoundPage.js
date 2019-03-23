import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true;
  return (
    <React.Fragment>
      <Helmet>
        <title>Page Not Found</title>
        <meta property="og:title" content="Page Not Found" />
      </Helmet>
      <h1>Oops! Page not found!</h1>
    </React.Fragment>
  );
}

export default {
  component: NotFoundPage
};
