import PageTitle from "../components/PageTitle";
import styles from "./Music.module.scss";

const Music = () => {

  const musicDB = [
    {
      title: "Covidana",
      embeded: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1668003216&amp;{ ADD YOUR PARAMETERS HERE }",
      writeup: "Dolore deserunt et voluptate et voluptate do laboris consectetur culpa labore. Cupidatat voluptate tempor et irure ex magna dolor ex ex. Ut officia id ullamco veniam ipsum dolore. Enim quis ea sunt quis ullamco tempor excepteur laborum minim aute ut fugiat nisi."
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
          <p>Lorem eiusmod occaecat in adipisicing tempor nostrud sint Lorem esse aute. Sint ex est cupidatat deserunt sint. Sunt minim ipsum in esse elit non et voluptate eu. Commodo ex aliqua dolor eu mollit nostrud id sint do culpa minim deserunt. Veniam reprehenderit id aliqua ipsum minim eu dolore do ullamco elit exercitation dolore.In duis sunt consequat est Lorem incididunt qui in proident ex dolor sit adipisicing irure. Velit ad eiusmod consequat sunt pariatur laboris amet ullamco cillum proident voluptate. Elit ad ullamco dolor culpa consequat fugiat ut enim ex ex. Minim ea exercitation ad non incididunt nisi ullamco in nulla pariatur. Consectetur in do officia sunt exercitation sint in.</p>
        </div>

        <h3>Recording</h3>
        <p>Lorem eiusmod occaecat in adipisicing tempor nostrud sint Lorem esse aute. Sint ex est cupidatat deserunt sint. Sunt minim ipsum in esse elit non et voluptate eu. Commodo ex aliqua dolor eu mollit nostrud id sint do culpa minim deserunt. Veniam reprehenderit id aliqua ipsum minim eu dolore do ullamco elit exercitation dolore.In duis sunt consequat est Lorem incididunt qui in proident ex dolor sit adipisicing irure. Velit ad eiusmod consequat sunt pariatur laboris amet ullamco cillum proident voluptate. Elit ad ullamco dolor culpa consequat fugiat ut enim ex ex. Minim ea exercitation ad non incididunt nisi ullamco in nulla pariatur. Consectetur in do officia sunt exercitation sint in.Officia fugiat eu officia eiusmod minim. Qui dolor sunt adipisicing cillum laborum nisi ut elit adipisicing ullamco in deserunt nostrud. Sunt irure excepteur culpa voluptate pariatur eu ea cupidatat eu sit commodo sit. Cillum deserunt nostrud nisi nulla esse ad sunt cupidatat.
        </p>

        <h3>Samples</h3>
        <div className={styles.AllProjects}>
            {musicDB.map((song, idx) => (
              <div key={idx} className={styles.EachProject}>

                <div className={styles.ProjectInfoDiv}>
                  <h5>{song.title}</h5>
                  <p>{song.writeup}</p>
                </div>
                
                <iframe className={styles.Iframe} frameborder="no" allow="autoplay" src={song.embeded}/>
              </div>
            ))}
        </div>

      </div>

    </main>
  );
};

export default Music;
