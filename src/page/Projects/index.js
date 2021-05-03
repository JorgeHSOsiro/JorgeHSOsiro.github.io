import React from 'react';

import ProjectModal from '../../components/ProjectModal';
import catz from '../../assets/catz-factz.png';
import todo from '../../assets/to-do-list.png';
import trybeer from '../../assets/trybeer_v2.png';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.mainProjContainer}>
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
