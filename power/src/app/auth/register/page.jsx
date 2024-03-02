import React from 'react';
import styles from './authpages.module.scss';
import Link from 'next/link';

const RegistrationPage = () => {
  return (
  <div className={styles.backgroundContainer}>  
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}><span>Registration Form</span></div>
        <form action="#">
          <div className={styles.row}>
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" required />
          </div>
          <div className={styles.row}>
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={styles.row}>
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
    
          <div className={`${styles.row} ${styles.button}`}>
            <input type="submit" value="Register" />
          </div>
          <div className={styles.signupLink}>
            Already a member?{' '}
            <Link href="/auth/login">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default RegistrationPage;
