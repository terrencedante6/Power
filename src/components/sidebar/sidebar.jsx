import React from 'react';
import Link from 'next/link';
import { FaMobile, FaBox, FaFile, FaBullhorn, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const navItems = [
    { text: 'Mobile Request', icon: <FaMobile />, link: '/application/mobilerequest' },
    { text: 'Stocks', icon: <FaBox />, link: '/application/stock' },
    { text: 'Reports', icon: <FaFile />, link: '/application/report' },
    { text: 'Announcements', icon: <FaBullhorn />, link: '/announcement' },
    { text: 'Accounts', icon: <FaUsers />, link: '/account' },
    { text: 'Settings', icon: <FaCog />, link: '/setting' },
    { text: 'Logout', icon: <FaSignOutAlt />, link: '/logout' },
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
