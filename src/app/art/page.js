import PageTitle from "../components/PageTitle";
import styles from "./Art.module.scss";

const Art = () => {
  return (
    <main>
      <head>
        <title>Art</title>
      </head>

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
            creating captivating visual narratives.{" "}
          </p>

          <p>
            Embracing the digital realm, my iPad becomes a portal to endless
            artistic exploration. Digital drawings allow me to push boundaries,
            crafting intricate designs and vibrant compositions with precision
            and ease. Software like Photoshop and Illustrator open up a realm of
            possibilities, where I can manipulate images, infuse life into
            illustrations, and create visually striking graphics.{" "}
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
      </div>
    </main>
  );
};

export default Art;
