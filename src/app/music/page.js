import PageTitle from "../components/PageTitle";
import styles from "./Music.module.scss";

export const metadata = {
  title: "Music"
}

const Music = () => {

  const musicDB = [
    {
      title: "Covidana",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1668003216&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "As the name might suggest, I created this project while alone and bored one afternoon during quarantine."
    },
    {
      title: "Mellow Yellow",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1668005433&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "Dolore deserunt et voluptate et voluptate do laboris consectetur culpa labore."
    },
    {
      title: "Orchestral EDM",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1668005979&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "Dolore deserunt et voluptate et voluptate do laboris consectetur culpa labore. Cupidatat voluptate tempor et irure ex magna dolor ex ex. Ut officia id ullamco veniam ipsum dolore. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi."
    },
    {
      title: "Electronic Instrumental 3",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1683120819&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "Dolore deserunt et voluptate et voluptate do laboris consectetur culpa labore. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi."
    },
    {
      title: "LenJam2013 a",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1668006534&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "Dolore deserunt et voluptate et voluptate. Cupidatat voluptate tempor et irure ex magna dolor ex ex. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi."
      
    },
    {
      title: "LenJam2013 b",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1668006636&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "Dolore deserunt et voluptate et voluptate do laboris consectetur culpa labore. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi."
    }
  ]

  return (
    <main>

      <div className="MainContent">
        
        <PageTitle title="Music" />

        <div className="PageIntro">
          <p>Music has been an integral aspect of my life since childhood. Early exposure to piano and violin laid the foundation, but it was during a summer session, attempting to play radio hits on the piano, that I grasped the intricacies of music theory. This revelation ignited a profound appreciation, prompting self-taught guitar mastery and the establishment of a high school band. University witnessed my entry into an a cappella group, where I developed a profound admiration for vocal harmony. Post-graduation, my immersion in the world of recording evolved into a passionate hobby, fostering a deep connection to the art of sound.</p>
        </div>

        <h3>Recording</h3>
        <p>Music recording represents the fusion of my technical and software proficiency with my musical acumen. Much like the transformative effect of overlaying harmonies onto a melody, the process of layering tracks in recording significantly influences the sonic landscape.

        Within my modest amateur home recording studio, I employ the Behringer UMC U-Phoria 1820 as the cornerstone of my audio hardware interface. The keyboard of choice is the Korg M50, while my microphone arsenal comprises the Rode NT2A, Blue Bluebird, and Blue Babybottle, complemented by the Warm WA12 serving as the primary preamp. To ensure precision and accuracy in sound reproduction, I rely on the JBL LSR308 studio monitors. In terms of software, I leverage Apple's Logic Pro as my preferred digital audio workstation.
        
        Attached are samples of my recordings for your appreciation.
        </p>

        <h3>Samples</h3>
        <div className={styles.AllProjects}>
            {musicDB.map((song, idx) => (
              <div key={idx} className={styles.EachProject}>

                <div className={styles.ProjectInfoDiv}>
                  <h5>{song.title}</h5>
                </div>
                
                <iframe className={styles.Iframe} frameBorder="no" allow="autoplay" src={song.embeded}/>
              </div>
            ))}
        </div>

      </div>

    </main>
  );
};

export default Music;
