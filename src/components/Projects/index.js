import React from 'react';

import ProjectModal from '../ProjectModal';
import catz from '../../assets/catz-factz.png';
import todo from '../../assets/to-do-list.png';
import trybeer from '../../assets/trybeer_v2.png';
import cookmaster from '../../assets/cook.png';

import styles from './projects.module.css';

export default function Projects() {
  return (
    <div id="projects" className={styles.mainProjContainer}>
      <h2>Projetos</h2>
      <div className={styles.projectContainer}>
        <ProjectModal
          title="Catz Facts Project"
          techs="HTML | CSS"
          src={catz}
          gitlink="https://github.com/JorgeHSOsiro/CatzFacts"
          vid="https://www.youtube.com/embed/cr9LqPl3u8A"
        />
        <ProjectModal
          title="To Do List"
          techs=" Javascript | HTML | CSS"
          src={todo}
          gitlink="https://github.com/JorgeHSOsiro/TodoList"
          vid="https://www.youtube.com/embed/1Xu1zXdoGQE"
        />
        <ProjectModal
          title="Cookmaster"
          techs=" Javascript | Ejs | Bootstrap | Node | MySQL"
          src={cookmaster}
          gitlink="https://github.com/JorgeHSOsiro/cookmaster"
          vid="https://www.youtube.com/embed/HtSka0QkXZs"
        />
        <ProjectModal
          title="Trybeer V2"
          techs=" Javascript | React | Node | Sequelize | MongoDB"
          src={trybeer}
          gitlink="https://github.com/JorgeHSOsiro/trybeer-v2"
          vid="https://www.youtube.com/embed/hO06MVS8V_w"
        />
      </div>
    </div>
  );
}
