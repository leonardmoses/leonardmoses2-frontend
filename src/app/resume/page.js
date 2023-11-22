import PageTitle from "../components/PageTitle";
import styles from "./Resume.module.scss";
import Image from "next/image";
import resume from "../static/Moses_Resume_Software.png";


export const metadata = {
  title: "Resume"
}

//https://stackoverflow.com/questions/56348979/reactjs-downloading-a-pdf-file-failed-no-file
const Resume = () => {
  return (
    <main>

      <div className="MainContent">
        <PageTitle title="Resume" />

        <div className={styles.DownloadDiv}>
          <h3 className={styles.h3}>Updated October 2023</h3>
          <a
            href="/Moses_Resume_Software.pdf"
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
