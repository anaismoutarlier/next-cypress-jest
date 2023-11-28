import styles from "./page.module.css";

export default function Success() {
  return (
    <main id="login-success" className={styles.main}>
      <h1>Congratulations!</h1>
      <h6>You have successfully created your account.</h6>
    </main>
  );
}
