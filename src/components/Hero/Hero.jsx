import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className="leading-none">
          <h1 className={styles.title}>Hi, I'm </h1>
          <h1 className={styles.title}>Mayank Ekaghara</h1>
        </div>
        <p className={styles.description}>
          Motivated and results-driven graduate seeking a challenging position
          as a Software Developer, with expertise in coding, problem-solving,
          and collaboration within dynamic teams.
        </p>
        <div className={styles.buttons}>
          <a
            href="mailto:mayankekaghara.me@email.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
