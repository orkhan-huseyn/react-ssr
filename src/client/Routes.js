import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    path: "/",
    exact: true,
    ...HomePage
  },
  {
    path: "/users",
    exact: true,
    ...UsersListPage
  }
];
