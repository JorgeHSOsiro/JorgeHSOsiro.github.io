import React, { useState } from 'react';
import Modal from 'react-modal';
import { VscClose } from 'react-icons/vsc';
import { FaGithub } from 'react-icons/fa';

import styles from './projectsModal.module.css';

export default function ProjectModal({ title, src, vid, gitlink, techs }) {
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement('div');
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={styles.imgContainer}>
        <input
          type="image"
          className={styles.projImage}
          src={src}
          alt={title}
          onClick={toggleModal}
        />
      </div>
      <Modal
        className={styles.modal}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My modal"
      >
        <button className={styles.closeBtn} onClick={toggleModal}>
          <VscClose />
        </button>
        <h2>{title}</h2>
        <div className={styles.descriptionContent}>
          <p>{techs}</p>
          <div className={styles.projectGit}>
            <a href={gitlink}>
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.modalContent}>
          <div>
            <iframe
              className={styles.iframeTube}
              src={vid}
              frameBorder="0"
              title={title}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
