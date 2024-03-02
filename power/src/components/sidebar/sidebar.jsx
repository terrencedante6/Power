import React from 'react';
import Link from 'next/link';
import { FaMobile, FaBox, FaFile, FaBullhorn, FaUsers, FaCog, FaSignOutAlt, FaHome, FaChartBar } from 'react-icons/fa';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const navItems = [
    { text: 'Home', icon: <FaHome />, link: '/' },
    { text: 'Dashboard', icon: <FaChartBar />, link: '/application/dashboard' }, 
    { text: 'Mobile Request', icon: <FaMobile />, link: '/application/mobilerequest' },
    { text: 'Stocks', icon: <FaBox />, link: '/application/stock' },
    { text: 'Reports', icon: <FaFile />, link: '/application/report' },
    { text: 'Announcements', icon: <FaBullhorn />, link: '/application/announcement' },
    { text: 'Accounts', icon: <FaUsers />, link: '/application/account' },
    { text: 'Settings', icon: <FaCog />, link: '/application/setting' },
    { text: 'Logout', icon: <FaSignOutAlt />, link: '/application/logout' },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <span>Amlan LDRRM</span>
      </div>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref>
              <div className={styles.navItem}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.text}>{item.text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
