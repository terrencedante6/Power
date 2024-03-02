import React from 'react';
import Image from 'next/image';
import AboutLayout from './layout';
import styles from './about.module.scss';

const AboutPage = () => {
  return (
    <AboutLayout>
      <div className={styles.container}>

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
            <a href="/landingsubpages/about" className={styles.navbarLink}>about</a>
            <a href="/landingsubpages/services" className={styles.navbarLink}>services</a>
            <a href="/landingsubpages/contact" className={styles.navbarLink}>Contact</a>
            <a href="/auth/login" className={styles.navbarLink}>Login</a>
          </div>
        </nav>

        <div className={styles.aboutContent}>
          <h1>About Us</h1>
          <p>
            Welcome to Amlan's Local Disaster Risk Reduction Management (LDRRM) Office, where our mission is to ensure the safety and well-being of our community.
          </p>

          <p>
            With a dedicated focus on managing hazards and preparing for disasters, we strive to create a climate-resilient and disaster-ready environment. Our team is committed to proactive measures, working tirelessly to minimize risks and enhance the overall resilience of our community.
          </p>

          <p>
            Together, we build a future that is secure, prepared, and able to face challenges head-on.
          </p>
        </div>
      </div>
    </AboutLayout>
  );
};

export default AboutPage;
