import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        HEADER
        <Link to="/">home</Link>
        <Link to="/countries">countries</Link>
      </div>
    </header>
  );
};

export default Header;
