import React from 'react';
import Image from 'next/image'; 
import LandingLayout from './landingLayout';
import styles from './landingstyle.module.scss';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <LandingLayout>
      <div className={styles.hero}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.contentContainer}>

          <nav className={styles.navbar}>

            <Image
              src="/images/logos.png"
              alt="Navbar Logo"
              className={styles.logoImageNavbar}
              width={200}
              height={55}
              objectFit="contain"
            />
            <div className={styles.links}>
              <Link href="/landingsubpages/about" className={styles.navbarLink}>about</Link>
              <Link href="/landingsubpages/services" className={styles.navbarLink}>services</Link>
              <Link href="/landingsubpages/contact" className={styles.navbarLink}>Contact</Link>
              <Link href="/auth/login" className={styles.navbarLink}>Login</Link>
            </div>
          </nav>


          <div className={styles.bigMessage}>
            <h1>Amlan's LDRRM Office's goal is to keep the community safe by managing hazards & preparing for disasters.</h1>
            <p className={styles.smallText}>Climate Resilient & Disaster Ready</p>
            <button className={styles.downloadButton}>Download App</button>
          </div>


          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <Image
                src="/images/amlaners.png"
                alt="Amlan's LDRRM Office Logo"
                className={styles.logoImage}
                width={950}
                height={600}
                objectFit="contain"
              />
            </div>
          </footer>
        </div>
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
