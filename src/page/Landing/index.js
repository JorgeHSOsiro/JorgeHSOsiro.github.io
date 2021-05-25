import React from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMysql,
  SiMongodb,
  SiNodeDotJs,
  SiHeroku,
  SiJava,
  SiAndroid,
  SiPython,
} from 'react-icons/si';
import portFoto from '../../assets/port_foto.jpg';
import Projects from '../../components/Projects';
import styles from './styles.module.css';

export default function Landing() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Jorge Henrique Shiniti Osiro</h1>
        <h2>Desenvolvedor FullStack</h2>
      </div>
      <div id="sobre" className={styles.aboutContainer}>
        <div className={styles.description}>
          <p className={styles.about}>
            <strong className={styles.strong}>Olá!</strong>Sou o Jorge. Em
            minha jornada na tecnologia realizei cursos em Mobile Android na
            Digital House com fundamentos em Java e Web Fulstack na Trybe focado
            em React.js e Node.js. Busco estar em constante aprendizado
            realizando cursos, participando de eventos, como a NLW da
            Rocketseat, e ouvindo podcasts de tecnologia. Gosto muito de
            videogames, música e sim gosto de gatos!{' '}
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.myPhoto}
            src={portFoto}
            alt="foto Jorge Osiro"
          />
        </div>
      </div>

      <div id="skills" className={styles.skillsContainer}>
        <h2 className={styles.subtitles}>Skills</h2>
        <div className={styles.skills}>
          <div className={styles.icons}>
            <SiJavascript className={styles.icon} />
            <p>Javascript</p>
          </div>
          <div className={styles.icons}>
            <SiHtml5 className={styles.icon} />
            <p>HTML5</p>
          </div>
          <div className={styles.icons}>
            <SiCss3 className={styles.icon} />
            <p>CSS3</p>
          </div>
          <div className={styles.icons}>
            <SiReact className={styles.icon} />
            <p>React.Js</p>
          </div>
          <div className={styles.icons}>
            <SiMysql className={styles.icon} />
            <p>MySQL</p>
          </div>
          <div className={styles.icons}>
            <SiMongodb className={styles.icon} />
            <p>MongoDB</p>
          </div>
          <div className={styles.icons}>
            <SiNodeDotJs className={styles.icon} />
            <p>Node.Js</p>
          </div>
          <div className={styles.icons}>
            <SiHeroku className={styles.icon} />
            <p>Heroku</p>
          </div>
          <div className={styles.icons}>
            <SiJava className={styles.icon} />
            <p>Java</p>
          </div>
          <div className={styles.icons}>
            <SiAndroid className={styles.icon} />
            <p>Android</p>
          </div>
          <div className={styles.icons}>
            <SiPython className={styles.icon} />
            <p>Python</p>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}
