import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...HomePage
      },
      {
        path: "/users",
        exact: true,
        ...UsersListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
