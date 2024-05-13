import React from "react";
import styles from "./Register.module.css";

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
      <div>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <p>this is the error</p>
          </div>
          <div>
            <input type="text" placeholder="DOB" />
            <p>this is the error</p>
          </div>
          <div>
            <input type="email" placeholder="Email" />
            <p>this is the error</p>
          </div>
          <div>
            <input type="password" placeholder="Password" />
            <p>this is the error</p>
          </div>
          <div>
            <input type="password" placeholder="Repeat Password" />
            <p>this is the error</p>
          </div>
          <p>this is the main error</p>
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
