import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      HEADER
      <Link to="/">home</Link>
      <Link to="/countries">countries</Link>
    </header>
  );
};

export default Header;
