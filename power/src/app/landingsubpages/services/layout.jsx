import React from 'react';
import { Inter } from 'next/font/google';
import styles from './service.module.scss';

const inter = Inter({ subsets: ['latin'] });

const ServiceLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Services Page</title>
        <meta name="description" content="Your description here" />
      </head>
      <body className={`${inter.className} ${styles.serviceLayout}`}>

        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
};

export default ServiceLayout;
