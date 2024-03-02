
import React from 'react';
import Layout from '../layout';
import styles from './dashboard.module.scss';

const DashboardPage = () => {
  return (
    <Layout contentClassName={styles.dashboardContent}>
      <div>
        Hello Dashboard!

      </div>
    </Layout>
  );
};

export default DashboardPage;
