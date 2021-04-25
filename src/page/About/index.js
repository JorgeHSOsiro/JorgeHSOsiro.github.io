import React from 'react';
import portFoto from '../../assets/port_foto.jpg';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <div class="container-image">
        <img className={styles.myPhoto } src={portFoto} alt="foto Jorge Osiro" />
      </div>
      <div>
        <h2 id="sobre">Sobre</h2>
        <div className="desc">
          <p>
            Minha jornada no meio do desenvolvimento começou na Alura onde
            aprendi alguns fundamentos em lógica de programação, HTML5 e CSS3.
          </p>
          <p>
            Em seguida comecei meus estudos em desenvolvimento Android na
            Digital House.
          </p>
          <p>
            Por sentir uma necessidade de aprimorar meus conhecimentos, decidi
            ingressar na Trybe para me tornar um desenvolvedor fullstack.
          </p>
        </div>
      </div>
    </div>
  );
}
