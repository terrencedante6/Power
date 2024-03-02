import React from 'react';
import Image from 'next/image';
import ServiceLayout from './layout';
import styles from './service.module.scss';


const ServicePage = () => {
  return (
    <ServiceLayout>
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

  
        <div className={styles.serviceContent}>
          <h1>Our Services</h1>
          <p>
            At Amlan's Local Disaster Risk Reduction Management (LDRRM) Office, we offer a range of services
            aimed at safeguarding our community and building resilience against potential hazards. Our services include:
          </p>

          <h2>1. Hazard Management</h2>
          <p>
            We specialize in identifying and managing various hazards that pose a threat to our community.
            Through rigorous analysis and strategic planning, we work to mitigate the impact of these hazards.
          </p>

          <h2>2. Disaster Preparedness</h2>
          <p>
            Preparedness is key to minimizing the effects of disasters. Our team is dedicated to ensuring
            that our community is well-prepared through drills, education, and the development of emergency plans.
          </p>

          <h2>3. Climate-Resilient Environment</h2>
          <p>
            Building a climate-resilient environment is crucial for long-term sustainability. We focus on
            initiatives that enhance our community's ability to withstand the challenges posed by climate change.
          </p>


        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServicePage;
