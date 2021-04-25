import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.links}>
      <div class="contact">
        <div className={styles.contactIcon}>
          <a href="https://www.linkedin.com/in/jorge-osiro/">
            <FaLinkedin />
          </a>
        </div>

        <div className={styles.contactIcon}>
          <a href="https://github.com/JorgeHSOsiro">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
