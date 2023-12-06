import PageTitle from "@/app/components/PageTitle";
import Link from "next/link";
import Image from "next/image";
import styles from "./Design.module.scss"

const Design = () => {

  const designDb = [
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
        <PageTitle title="Design Portfolio Page" />

        <div className={styles.PortfolioBriefDiv}>
          <div className={styles.PortfolioBrief}>
            <p>
              Welcome to my Design Portfolio. Below is a list of my design compositions. Consectetur occaecat irure tempor qui reprehenderit irure duis ad ullamco ea. Minim excepteur id pariatur magna. Aliqua reprehenderit sit est proident labore culpa proident ad quis excepteur voluptate. Aliqua sit exercitation veniam id anim ullamco exercitation ad tempor minim officia anim. Eu nostrud est aliqua magna irure laboris reprehenderit deserunt aliqua eiusmod cupidatat. Deserunt fugiat ea amet laboris sit culpa ad sint quis consectetur. Consectetur mollit aliqua cupidatat occaecat labore nisi do exercitation amet qui. Ad ullamco excepteur velit irure id elit sint non id ea minim. Eu eiusmod officia duis Lorem nostrud ipsum magna et cillum id aute aliquip nulla aute. Lorem dolor elit proident enim nisi sint irure irure elit commodo. Duis aute sit aute mollit.
            </p>
          </div>
          <Link href="/portfolio" className={styles.SoftwareNavDiv}>
            <h5>For Software portfolio click here</h5>
          </Link>
        </div>

        <h3>My Designs</h3>
        <div className={styles.AllDesigns}>
          {designDb.map((design, idx) => (
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


      </div>
      
    </main>
  );
};

export default Design;
