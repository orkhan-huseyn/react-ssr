import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">React SSR</Link>
    <Link to="/users">Users</Link>
  </header>
);

export default Header;
