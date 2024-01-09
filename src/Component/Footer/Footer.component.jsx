import React from "react";
import styles from "./Footer.module.css";
import { SiReact } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";

let Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.Footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            <b>
              Made with <SiReact className={styles.reactIcon} /> React and
              <FaHeart className={styles.reactIcon} /> Love HealthCheck
            </b>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
