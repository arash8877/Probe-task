import React, { useContext, useEffect } from "react";
import styles from "./Trials.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import Trial from "../../components/trial/Trial";
import { TrialContext } from "../../contexts/TrialContext";
import { Link } from "react-router-dom";

const Trials = () => {
  const { name, getProfileInfo } = useContext(AuthContext);
  const { trials } = useContext(TrialContext);

  useEffect(() => {
    getProfileInfo();
  }, [getProfileInfo]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
          />
        </div>
        <Link to="/profile">
          <div className={styles.userName}>{name}</div>
        </Link>
      </div>
      <ul>
        {trials.map((trial, index) => {
          return <Trial key={index} trial={trial} />;
        })}
      </ul>
    </section>
  );
};

export default Trials;
