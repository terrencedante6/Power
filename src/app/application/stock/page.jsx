import React from 'react';
import DashboardLayout from './layout';
import styles from './stock.module.scss';
import Link from 'next/link';


const Stocks = () => {
  return (
    <DashboardLayout>
      <div className={styles.dashboardContent}>

        <h1>Dashboard Page</h1>
      </div>
    </DashboardLayout>
  );
};

export default Stocks;
