import React from 'react';
import styles from './authpage.module.scss';
import Link from 'next/link';

const LoginPage = () => {
  return (
 
    <div className={styles.backgroundContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}><span>Login Form</span></div>
          <form action="#">
            <div className={styles.row}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email or Phone" required />
            </div>
            <div className={styles.row}>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div className={styles.pass}><a href="#">Forgot password?</a></div>
            <div className={`${styles.row} ${styles.button}`}>
              <input type="submit" value="Login" />
            </div>
            <div className={styles.signupLink}> Don't have an account? <Link href="/auth/register" className={styles.navbarLink}>Register</Link></div>
            <div className={styles.signupLink}> Back to Landing Page? <Link href="/" className={styles.navbarLink}>Click me</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
