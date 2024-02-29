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
            <a href="/application/about" className={styles.navbarLink}>about</a>
            <a href="/application/services" className={styles.navbarLink}>services</a>
            <a href="/application/contact" className={styles.navbarLink}>Contact</a>
            <a href="/auth/login" className={styles.navbarLink}>Login</a>
          </div>
        </nav>

        <div className={styles.aboutContent}>
          <h1>About AMLAN LDRRM</h1>
          <p>Welcome to Amlan's Local Disaster Risk Reduction Management (LDRRM) Office, where our paramount goal is to ensure the safety and well-being of our community. 
            With a dedicated focus on managing hazards and preparing for disasters, we strive to create a climate-resilient and disaster-ready environment. Our team is committed
            to proactive measures, working tirelessly to minimize risks and enhance the overall resilience of our community. Together, we build a future that is secure, prepared,
            and able to face challenges head-on.</p>

            <Image
    src="/images/moew.png"  
    alt="Display"
    className={styles.logoImageNavbar}
    width={200}
    height={55}
    objectFit="contain"
  />

<h1>FAQ's</h1>
<p>
Q: What (exactly) is a One Page website? <br />
A: Start here <br />

Q: Who runs One Page Love?<br />
A: Rob Hope<br />

Q: Can I submit my website?<br />
A: Yes<br />

Q: How can I keep up with everything?<br />
A: Newsletter, RSS, Twitter or Pinterest.<br />
</p>

<h1>Who? What? When? How?</h1>
<p>
The One Page Love website was launched in March 2008 by Rob Hope in Cape Town, South Africa.

The website runs on WordPress using a custom WordPress theme.

Suggestions and feedback always welcome – I really want to continuously improve your user experience.

Email: rob@onepagelove.com
Twitter: @robhope
LinkedIn: @robhope
Website: robhope.com
</p>


        </div>
      </div>
    </AboutLayout>
  );
};

export default AboutPage;
