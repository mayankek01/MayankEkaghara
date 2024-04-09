import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mayankekaghara.me@email.com">
            mayankekaghara.me@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/mayank-ekaghara-268629226"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/Mayank_Ekaghara
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/mayankek01"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mayankek01
          </a>
        </li>
      </ul>
    </footer>
  );
};
