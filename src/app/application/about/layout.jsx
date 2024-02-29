import React from 'react';
import { Inter } from 'next/font/google';
import styles from './about.module.scss';

const inter = Inter({ subsets: ['latin'] });

const AboutLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>About Page</title>
        <meta name="description" content="Your description here" />
      </head>
      <body className={`${inter.className} ${styles.aboutLayout}`}>

        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
};

export default AboutLayout;
