import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <div className="logo">APP LOGO</div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/countries">countries</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
