import React from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/images/logo.png";

let Header = () => {
  return (
    <React.Fragment>
      <header className={styles.Header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo for ToDo List" className={styles.logoImg} />
          <h1>HealthCheck</h1>
        </div>
        <button className={styles["Reset-now"]}>Reset</button>
      </header>
    </React.Fragment>
  );
};

export default Header;
