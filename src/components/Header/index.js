import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { GiCat } from 'react-icons/gi';

import styles from './header.module.css';

export default function Header() {
  const [activeScroll, setActiveScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setActiveScroll(true);
    } else {
      setActiveScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [activeScroll]);

  return (
    <div className={activeScroll ? styles.indiceScrolled : styles.indice}>
      <div>
        <p className={styles.namae}>
          <GiCat /> Jorge Osiro
        </p>
      </div>
      <div className={styles.linksContainer}>
        <ScrollLink to="sobre" smooth={true} duration={500}>
          Sobre
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projetos
        </ScrollLink>
      </div>
    </div>
  );
}
