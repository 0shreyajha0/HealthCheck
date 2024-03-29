import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./Popup.module.css";

const PopUp = () => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSaveName = () => {
    localStorage.setItem("userName", userName);
  };

  return (
    <div className={styles.Popup}>
      <div className={styles.formContainer}>
        <h2>Welcome to HealthCheck!</h2>
        <p>Please Enter Your Name:</p>
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={handleSaveName}
            className={styles.saveButton}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
