import PageTitle from "../components/PageTitle";
import styles from "./Art.module.scss";
import Image from "next/image";


export const metadata = {
  title: "Art"
}

const Art = () => {
  const artDb = [
    {
      name: "Child Portrait",
      image: "https://i.imgur.com/vMuZ8nt.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Young Man Face",
      image: "https://i.imgur.com/CNOBuyS.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Girl Face",
      image: "https://i.imgur.com/E5rVLQm.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Vegeta",
      image: "https://i.imgur.com/5T148VY.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Vegeta (Color)",
      image: "https://i.imgur.com/l4YEgzS.jpg",
      medium: "iPad brush and layer effects",
    },
    {
      name: "Horse & Rose",
      image: "https://i.imgur.com/HQfBsic.jpg",
      medium: "Pencil, illustrator",
    },
    {
      name: "Overcoat",
      image: "https://i.imgur.com/O9opT2H.jpg",
      medium: "Pencil and Scan",
    },
    {
      name: "Football Player",
      image: "https://i.imgur.com/24CH8dj.jpg",
      medium: "Pencil and Scan",
    },
    {
      name: "Gladiator",
      image: "https://i.imgur.com/TQx0GqF.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Grambit",
      image: "https://i.imgur.com/XMlnAJG.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Cyclops Blasting",
      image: "https://i.imgur.com/JwsNTRX.jpg",
      medium: "iPad brush and layer effects",
    },
    {
      name: "X-Men Trio",
      image: "https://i.imgur.com/mQLScyR.jpg",
      medium: "iPad Pencil",
    },
    {
      name: "Sakura Comic Style",
      image: "https://i.imgur.com/8QUv0fd.jpg",
      medium: "iPad brush and layer effects",
    },
    {
      name: "Akuma Air Hadoken",
      image: "https://i.imgur.com/p6w0PBB.jpg",
      medium: "iPad brush and layer effects",
    },
    {
      name: "Chaos (Made up character)",
      image: "https://i.imgur.com/34BH88w.jpg",
      medium: "Pencil, illustrator, and photoshop",
    },
    {
      name: "Gokou Super Saiyan Stylized",
      image: "https://i.imgur.com/d2Oc6gC.jpg",
      medium: "iPad brush and layer effects",
    },
    {
      name: "Phoenix",
      image: "https://i.imgur.com/9wsC2Zj.jpg",
      medium: "Pencil, illustrator, and photoshop",
    },
  ];

  const art3dDb = [
    {
      name: "747 Wing",
      image: "https://i.imgur.com/mOfAVjn.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Acoustic and Electric Guitars",
      image: "https://i.imgur.com/iPJ6eAC.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Traditional Alarm Clock",
      image: "https://i.imgur.com/JHRT329.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Bedroom Desk Angle",
      image: "https://i.imgur.com/3bWn1FA.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Bedroom at Night",
      image: "https://i.imgur.com/CTh65qj.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Motherboard: X570 Crosshair",
      image: "https://i.imgur.com/enSmCIa.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Locky the Dragon",
      image: "https://i.imgur.com/YO4Q0zJ.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
    {
      name: "Toyota Supra MKIV",
      image: "https://i.imgur.com/xhj46gI.jpg",
      medium: "3D Modeling - Autodesk Maya",
    },
  ];

  return (
    <main>
      <div className="MainContent">
        <PageTitle title="Art" />

        <div className="PageIntro">
          <p>
            Art is my boundless universe, where creativity knows no limits and
            every stroke of my pencil, brush, or digital pen becomes a conduit
            for my emotions and ideas. Pencil drawings are my initial love
            affair with art, where the graphite dances on paper, capturing the
            essence of my imagination. Painting enriches my world, enabling me
            to blend colors, experimenting with textures and techniques,
            creating captivating visual narratives.
          </p>

          <p>
            Embracing the digital realm, my iPad becomes a portal to endless
            artistic exploration. Digital drawings allow me to push boundaries,
            crafting intricate designs and vibrant compositions with precision
            and ease. Software like Photoshop and Illustrator open up a realm of
            possibilities, where I can manipulate images, infuse life into
            illustrations, and create visually striking graphics.
          </p>

          <p>
            Venturing into the realm of 3D animation adds another dimension to
            my passion. Sculpting virtual forms, breathing life into characters,
            and constructing immersive worlds captivates me. The process of
            bringing a character to life, from concept to animation, is an
            exhilarating journey, filled with challenges and triumphs.
          </p>

          <p>
            Each medium I embrace becomes a unique language, a testament to my
            dedication and fervor for the artistry. From the tactile sensation
            of pencil on paper to the digital finesse of animation, my passion
            for art knows no boundaries, serving as a vibrant expression of my
            soul and a testament to my artistic journey.
          </p>
        </div>

        <h3>My Artwork</h3>
        <div className={styles.AllArtwork}>
          {artDb.map((artwork, idx) => (
            <div key={idx} className={styles.EachArtwork}>
              <h5 className={styles.title}>{artwork.name}</h5>

              <div className={styles.imageDiv}>
                <Image
                  src={artwork.image}
                  alt={artwork.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={1000}
                  height={1000}
                />
              </div>

              <h5 className={styles.medium}>Medium: {artwork.medium}</h5>
            </div>
          ))}
        </div>

        <h3>3D Modeling</h3>
        <div className={styles.AllArtwork}>
          {art3dDb.map((artwork, idx) => (
            <div key={idx} className={styles.EachArtwork}>
              <h5 className={styles.title}>{artwork.name}</h5>

              <div className={styles.imageDiv}>
                <Image
                  src={artwork.image}
                  alt={artwork.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={1000}
                  height={1000}
                />
              </div>

              <h5 className={styles.medium}>Medium: {artwork.medium}</h5>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Art;
