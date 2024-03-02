import React from 'react';
import Image from 'next/image';
import ContactLayout from './layout';
import styles from './Contact.module.scss'; 

const ContactPage = () => {
  return (
    <ContactLayout>
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


        <div className={styles.contactContent}>

   
          <h1>Contact Us</h1>
          <p>
            Feel free to reach out to us if you have any questions or concerns. Our team is here to assist you.
          </p>

          <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://example.com/facebook-icon.png" alt="Facebook" className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://example.com/instagram-icon.png" alt="Instagram" className={styles.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://example.com/twitter-icon.png" alt="Twitter" className={styles.icon} />
          </a>
          </div>




        </div>
      </div>
    </ContactLayout>
  );
};

export default ContactPage;
