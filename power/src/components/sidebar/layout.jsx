import React from 'react';
import Sidebar from './sidebar'; 
import styles from './sidebar.module.scss';

const SidebarLayout = ({ children }) => {
  return (
    <div className={styles.SidebarLayout}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
