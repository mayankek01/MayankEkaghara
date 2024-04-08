import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  
   const handleDownloadPDF = () => {
     // Path to your locally stored PDF file
     const filePath = "Mayank_Ekaghara.pdf";

     // Fetch the PDF file
     fetch(filePath)
       .then((response) => response.blob())
       .then((blob) => {
         // Create a blob URL for the PDF
         const url = window.URL.createObjectURL(new Blob([blob]));

         // Create a temporary anchor element to trigger the download
         const link = document.createElement("a");
         link.href = url;
         link.setAttribute("download", "Mayank_Ekaghara.pdf");
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);

         // Release the object URL
         window.URL.revokeObjectURL(url);
       })
       .catch((error) => console.error("Error downloading PDF:", error));
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
          <a
            onClick={handleDownloadPDF}
            className={styles.contactBtn}
          >
            Resume
          </a>
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
