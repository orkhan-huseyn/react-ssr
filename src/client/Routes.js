import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";
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
        path: "/admins",
        exact: true,
        ...AdminsListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
