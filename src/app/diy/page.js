import PageTitle from "../components/PageTitle";
import styles from "./Diy.module.scss";
import Image from "next/image";



const Diy = () => {
  const diyDb = [
    {
      name: "WallmountFront",
      image: "https://imgur.com/TafDTgR.jpg",
    }
  ];

  return (
    <main>

      <div className="MainContent">
        <PageTitle title="DIY" />

        <div className="PageIntro">
          <p>
            Passionate about creativity and hands-on learning, my fascination
            with Do-It-Yourself (DIY) projects has always been a driving force
            in my life. Whether it is building intricate furniture pieces,
            crafting unique home decor, or exploring innovative tech hacks, I
            find immense joy in the process of creating something from scratch.
            DIY projects not only fuel my curiosity but also serve as a canvas
            for my imagination. With every project, I delve into the realms of
            design, engineering, and craftsmanship, pushing my boundaries and
            embracing the thrill of turning ideas into tangible realities. I
            live in the journey of innovation and self-expression, where the
            possibilities are endless, and every DIY endeavor tells a story of
            passion and ingenuity.
          </p>

          <p>
            I enjoy woodworking and have experience using many tools such as
            table saws, miter saws, planers, routers, etc. I also have a good
            sense of electrical. I have installed wiring for home lighting, to
            car and home audio, to IT networking.
          </p>
        </div>

        <div className={styles.Wallmount}>
          <h3>Wallmount</h3>

          <div className={styles.WallmountWriteUp}>
            <div className={styles.WallmountWriteUpLeft}>
              <p>
                Meet Magneto, my primary desktop computer. It is computer with
                all its parts wall-mounted onto a frame. To me, this piece of
                technology, is also a piece of art. It is where I married my DIY
                and IT Skills.
              </p>
              <p>
                It all started when I had an iMac but was not satisfied with its
                graphics capabilities. After researching, I came upon three
                solutions.
              </p>
              <p>
                The first was to use an e-GPU, where you connect a more powerful
                graphics card externally using a thunderbolt cable (Thunderbolt
                1 at the time). The main problem with that was thunderbolt
                speeds were much slower than the new graphics card could
                provide, only giving 30-50% of the performance.
              </p>
              <p>
                The second solution, which would give me 100% of the
                performance, was to simply use a PC instead. This includes
                buying PC parts, installing windows, and using windows as my
                primary operating system. However, this was not an option for me
                as I wanted to still use macOS.
              </p>
              <p>
                The third solution was inspired from a question I had. Apple
                made it possible to install windows on mac so why not the
                opposite, installing mac on windows. After all, they both used
                intel processors. I discovered it was possible! Some people call
                it hackintoshing and it allows you to install macOS on PC parts.
              </p>
            </div>

            <div className={styles.WallmountWriteUpRight}>
              <p>
                I built the frame out of wood and vinyl wrapped it for a clean
                finish. I measured and cut out the appropriate holes for running
                the wiring and created raised transparent platforms out of
                acrylic sheets. I ordered all the computer parts and wiring
                necessary. I also ran some LED lighting behind the clear acrylic
                sheets for mood lighting.
              </p>

              <p>
                After all the hardware was completed installing macOS did not go
                as expected. There was a lot to learn and felt like a foreign
                language to me. However, I did not give up. I already invested a
                few thousand dollars into these parts as well as the time it
                took to build it. I reminded myself that I am a problem solver
                and have always been able to figure out a solution to every
                challenge. I continued on for days learning and researching what
                I needed to and after many failed attempted, I finally saw the
                apple logo boot up and I managed to install macOS! Not only
                could I install macOS but I could also install Windows and Linux
                each on separate drives. It was an incredible victory and there
                was no going back after that!
              </p>
            </div>

            <div className={styles.WallmountEachImage}>
              <Image className={styles.Image} src={diyDb[0].image} alt={diyDb[0].name} width={3759} height={2607} layout={"responsive"}/>
            </div>
            
          </div>
        </div>
      </div>

    </main>
  );
};

export default Diy;
