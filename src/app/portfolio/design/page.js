import PageTitle from "@/app/components/PageTitle";
import Link from "next/link";
import Image from "next/image";
import styles from "./Design.module.scss"


export const metadata = {
  title: "Design Portfolio"
}

const Design = () => {

  const designSoloDb = [
    {
      name: "World Aids Day Poster",
      image: "https://i.imgur.com/RHKU1Do.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "ADRA Works Cover Page",
      image: "https://i.imgur.com/blkTXTD.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Haiti Earthquake Poster",
      image: "https://i.imgur.com/Lbta4y0.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Haiti Earthquake Flier",
      image: "https://i.imgur.com/mMItG3m.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Domestic Violence Campaign Flier",
      image: "https://i.imgur.com/IAs2xGg.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Intern Program Advertisement",
      image: "https://i.imgur.com/1lRkbmh.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Logo for Tsunami Campaign",
      image: "https://i.imgur.com/elJb7qe.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Allstate Flier",
      image: "https://i.imgur.com/JvuG92t.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Allstate Banner",
      image: "https://i.imgur.com/jN82i9V.png",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Medical Practice Website",
      image: "https://i.imgur.com/EtMzRqg.jpg",
      medium: "Photoshop | InDesign | Dreamworks | HTML | CSS | Tumult Hype",
    },
    {
      name: "Business Card Mockups",
      image: "https://i.imgur.com/hKU094X.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "Art Exhibition Advertisement",
      image: "https://i.imgur.com/g7NJgww.jpg",
      medium: "Photoshop | InDesign",
    },
    {
      name: "University Newsletter",
      image: "https://i.imgur.com/aV4AhW7.jpg",
      medium: "InDesign",
    },
  ];

  const designCollabDb = [
    {
      name: "Logo Design",
      image: "https://i.imgur.com/N3piNE1.png",
      medium: "Illustrator",
    },
    {
      name: "Website Design",
      image: "https://i.imgur.com/8EohDyq.jpg",
      medium: "Photoshop | Dreamweaver",
    },
    {
      name: "Website Design",
      image: "https://i.imgur.com/pOeRMQQ.jpg",
      medium: "Photoshop | Dreamweaver",
    },
    {
      name: "Scoober App Design",
      image: "https://i.imgur.com/NxB5Vjm.png",
      medium: "Photoshop",
    },
    {
      name: "Scoober App Sign Up",
      image: "https://i.imgur.com/EifTZpF.png",
      medium: "Photoshop",
    },
    {
      name: "Scoober App Dashboard",
      image: "https://i.imgur.com/68rrolP.jpg",
      medium: "Photoshop",
    },
    {
      name: "Scoober App Payment 1",
      image: "https://i.imgur.com/iVi9ctn.jpg",
      medium: "Photoshop",
    },
    {
      name: "Scoober App Payment 2",
      image: "https://i.imgur.com/GBcUvjq.jpg",
      medium: "Photoshop",
    },
    {
      name: "Scoober App Payment 3",
      image: "https://i.imgur.com/AfsQ237.jpg",
      medium: "Photoshop",
    },
  ];

  return (
    <main>

      <div className="MainContent">
        <PageTitle title="Design Portfolio Page" />

        <div className={styles.PortfolioBriefDiv}>
          <div className={styles.PortfolioBrief}>
            <p>
            Welcome to my design portfolio! With my innate artistic inclination, I was drawn towards design, leading me to pursue a bachelor’s degree in Visual Communication. I immersed myself in the realm of graphic design, acquiring knowledge of design principles to effectively convey my message through visual language. Every product, service, or entity necessitates a compelling visual representation to communicate their identity to the world, and that's where I excel. Below, you'll find a selection of my works showcasing my proficiency in design composition, photo retouching and editing, typography, layout, color themes, and various other design principles.
            </p>
          </div>
          <Link href="/portfolio" className={styles.SoftwareNavDiv}>
            <h5>For software portfolio click here</h5>
          </Link>
        </div>

        <h3>Designs Done Independently</h3>
        <div className={styles.AllDesigns}>
          {designSoloDb.map((design, idx) => (
            <div key={idx} className={styles.EachDesign}>
              <h5 className={styles.title}>{design.name}</h5>

              <div className={styles.imageDiv}>
                <Image
                  src={design.image}
                  alt={design.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={1000}
                  height={1000}
                />
              </div>

              <h5 className={styles.medium}>Medium: {design.medium}</h5>
            </div>
          ))}
        </div>


        {/* Remove the brackets to enable the code */}
        {/* 
        <h3>Designs Done in Collaboration</h3>
        <div className={styles.AllDesigns}>
          {designCollabDb.map((design, idx) => (
            <div key={idx} className={styles.EachDesign}>
              <h5 className={styles.title}>{design.name}</h5>

              <div className={styles.imageDiv}>
                <Image
                  src={design.image}
                  alt={design.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={1000}
                  height={1000}
                />
              </div>

              <h5 className={styles.medium}>Medium: {design.medium}</h5>
            </div>
          ))}
        </div>
        */}

      </div>
      
    </main>
  );
};

export default Design;
