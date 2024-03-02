import React from 'react';
import styles from './landingstyle.module.scss';
import Sidebar from '../../components/sidebar/sidebar';

const LandingLayout = ({ children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.contentContainer}>
        <div className={`${styles.landingContainer} ${styles.fullHeight}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LandingLayout;
