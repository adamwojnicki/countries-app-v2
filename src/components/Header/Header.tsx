import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} data-testid="header">
      <div className="container">
        <nav className={styles.nav}>
          <div className="logo">
            <Link to="/">
              <h1>APP LOGO</h1>
            </Link>
          </div>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to="/">home</Link>
            </li>
            <li className={styles.li}>
              <Link to="/countries">countries</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
