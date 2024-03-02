import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children, contentClassName }) => {
  return (
    <html lang="en">
      <head>    
      </head>
      <body className={inter.className}>
        <Sidebar />
        <main className={contentClassName}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
