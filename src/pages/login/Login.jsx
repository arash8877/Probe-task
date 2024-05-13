import React, { useContext } from "react";
import styles from "./Login.module.css";


const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
        />
      </div>
      <div className={styles.form}>
        <form className={styles.form}>
          <div className={styles.input}>
            <input type="email" placeholder="Email" />
            <p className={styles.error}>error is here</p>
          </div>
          <div>
            <input className={styles.input} type="email" placeholder="Email" />
            <p className={styles.error}>error is here</p>
          </div>
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
