import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch("./Mayank_Ekaghara.pdf").then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);

          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Mayank_Ekaghara.pdf";
          alink.click();
        });
      });
    };


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
          {/* <a
            onClick={onButtonClick}
            className={styles.contactBtn}
          >
            Resume
          </a> */}
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
