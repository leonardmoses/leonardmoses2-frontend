/* eslint-disable react/no-unescaped-entities */
import PageTitle from "../components/PageTitle";
import styles from "./Portfolio.module.scss";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Software Portfolio"
}

const Portfolio = () => {
  const portfolioDb = [
    {
      name: "Calendar App",
      live: "https://see-care-cal-1-1.vercel.app/",
      git: "https://github.com/leonardmoses/ct-eyeCare-calendar-1.1",
      image: "https://i.imgur.com/oBdsosT.png",
    },
    {
      name: "Marvel Character Comparator",
      live: "https://marvel-character-comparator-2.vercel.app/",
      git: "https://github.com/leonardmoses/marvel_character_comparator_2",
      image: "https://i.imgur.com/ST4SNlv.png",
    },
    {
      name: "Body Movement",
      live: "https://lennie-project2.herokuapp.com/",
      git: "https://github.com/leonardmoses/body_movement",
      image: "https://i.imgur.com/8WIdyIf.png",
    },
    {
      name: "Contrivia",
      live: "https://contrivia.netlify.app/",
      git: "https://github.com/leonardmoses/contrivia-frontend",
      image: "https://imgur.com/MhDaVA6.png",
    },
    {
      name: "Match It",
      live: "https://match-it-eight.vercel.app/",
      git: "https://github.com/leonardmoses/MatchIt",
      image: "https://imgur.com/Vsaeolf.png",
    },
  ];

  return (
    <main>

      <div className="MainContent">
        <PageTitle title="Software Developer Portfolio" />

        <div className={styles.PortfolioBriefDiv}>
          <div className={styles.PortfolioBrief}>
            <p>
              In the realm of software engineering, we wield the power to transform imagination into reality. It is this thrilling future I am excited to help usher in. The path to get there is filled with problems that need solving, and problem-solving is an integral part of me. Whether it be in art, music, or any other project, no obstacle has ever stopped me from coming up with a solution. I think outside the box and bring new perspectives. This is why I enjoy software engineering so much. Below is a list of web applications I have developed independently. There are two links under each app: “Live Site” to view and interact with the app, and “GitHub” to view the source code.
            </p>
          </div>
          <Link href="/portfolio/design" className={styles.DesignNavDiv}>
            <h5>For design portfolio click here</h5>
          </Link>
        </div>

        <h3>My Projects</h3>
        <div className={styles.AllProjects}>
          {portfolioDb.map((project, idx) => (
            <div key={idx} className={styles.ProjectDiv}>
              <h4>{project.name}</h4>
              <div className={styles.ImageDiv}>
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={1000}
                  height={1000}
                />
              </div>
              <a className={styles.Git} href={project.git} target="#">
                <p>GitHub</p>
              </a>
              <a className={styles.Live} href={project.live} target="#2">
                <p>Live Site</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
};

export default Portfolio;
