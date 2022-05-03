import React from "react";
import LoginForm from "./components/LoginForm";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.background}>
      <LoginForm />
    </div>
  );
};

export default App;
