import React from 'react';
import { Link } from 'react-router-dom';
import { GiCat } from 'react-icons/gi';

import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.indice}>
      <Link to="/"><GiCat />Home</Link>
      <Link to="/projects">Projetos</Link>
    </div>
  );
}
