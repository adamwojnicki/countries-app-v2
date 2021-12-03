import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.p}>&copy; Adam Wojnicki 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
