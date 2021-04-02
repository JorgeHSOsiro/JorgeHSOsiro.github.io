import React from 'react';
import portFoto from '../assets/port_foto.jpg';
import strangerTh from '../assets/stranger-things.jpg'
import './styles.css';

export const Landing = () => {
  return (
    <div className='body'>
      <h1 id="top">Jorge Henrique Shiniti Osiro</h1>
      <div className="indice">
          <a href="#sobre">Sobre</a>
          <a href="#skills">Tecnologias</a>
          <a href="#projetos">Projetos</a>
          <a href="#links">Links</a>
      </div>
      <div class="container-image">
          <img className="my-photo" src={ portFoto } alt="foto Jorge Osiro" />
      </div>
      <div>
        <h2 id="sobre">Sobre</h2>
        <div className="desc">
          <p>Minha jornada no meio do desenvolvimento começou na Alura onde aprendi alguns fundamentos em lógica de programação, HTML5 e CSS3.</p>
          <p>Em seguida comecei meus estudos em desenvolvimento Android na Digital House.</p>
          <p>Por sentir uma necessidade de aprimorar meus conhecimentos, decidi ingressar na Trybe para me tornar um desenvolvedor fullstack.</p>
        </div>
      </div>
      <div>
        <h2 id="skills">Tecnologias</h2>
        <div class="skills">
            <p>Javascript</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React.Js</p>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>Node.Js</p>
            <p>Heroku</p>
            <p>Java</p>
            <p>Android</p>
        </div>
      </div>
      <div class="projects">
          <h2 id="projetos">Projetos</h2>
          <div>
              <h3>Stranger Things</h3>
              <a href="https://jorgehsosiro-ft.herokuapp.com/">
                  <img class="str" src={ strangerTh } alt="stranger-things" />
              </a>
          </div>
      </div>
      <div class="links">
          <h2 id="links">Links</h2>
          <ul class="contact">
              <li><a href="https://www.linkedin.com/in/jorge-osiro/">Linkedin</a></li>
              <li><a href="https://github.com/JorgeHSOsiro">Github</a></li>
          </ul>
      </div>
    </div> 
  );
}