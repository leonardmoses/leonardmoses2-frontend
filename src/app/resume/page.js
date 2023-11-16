import PageTitle from "../components/PageTitle";
import styles from "./Resume.module.scss";
import Image from "next/image";
import resume from "../static/Moses_Resume_Software.png";


const Resume = () => {
  return (
    <main>
      <head>
        <title>Resume</title>
      </head>

      <div className="MainContent">
        <PageTitle title="Resume" />

        <div className={styles.DownloadDiv}>
          <h3 className={styles.h3}>Updated October 2023</h3>
          <a
            href="../static/Moses_Resume_Software.pdf"
            download
            className={styles.ResumeButton}>
            Download Resume
          </a>
        </div>

        <div className={styles.ResumeImageDiv}>
          <Image className={styles.ResumeImage} src={resume} alt="Resume" />
        </div>

      </div>
    </main>
  );
};

export default Resume;
