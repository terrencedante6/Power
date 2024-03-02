import React from 'react';
import { Inter } from 'next/font/google';
import styles from './contact.module.scss';

const inter = Inter({ subsets: ['latin'] });

const ContactLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Contact Page</title>
        <meta name="description" content="Your description here" />
      </head>
      <body className={`${inter.className} ${styles.contactLayout}`}>

        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
};

export default ContactLayout;
