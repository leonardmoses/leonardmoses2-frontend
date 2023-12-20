import PageTitle from "../components/PageTitle";
import styles from "./Testimonials.module.scss";
import Image from "next/image";

export const metadata = {
  title: "Testimonials",
};

const Testimonials = () => {
  const testimonialsDb = [
    {
      name: "Biju Pandit",
      relationship: "colleague",
      image: "https://i.imgur.com/QhyCgIQ.png",
      statement:
        "Id voluptate qui commodo ullamco sint esse incididunt cillum laborum dolore proident cillum dolor labore. Laboris ullamco voluptate deserunt eu anim aute voluptate irure in. Occaecat do ullamco officia labore.",
    },
    {
      name: "Anthony Bellissimo",
      relationship: "colleague",
      image: "https://i.imgur.com/QhyCgIQ.png",
      statement:
        "Aliqua adipisicing sunt ex id. Occaecat est anim dolor proident sit nulla pariatur tempor non. Est Lorem aliquip duis voluptate qui consequat ex est ipsum ex tempor.",
    },
    {
      name: "Sanjay Thomas",
      relationship: "Former Employer",
      image: "https://i.imgur.com/QhyCgIQ.png",
      statement:
        "Dolore pariatur aute adipisicing dolor eiusmod ipsum est ex do consequat adipisicing in sunt ea. Mollit culpa eu ex exercitation id eiusmod do in culpa nisi eiusmod aute et. Incididunt proident Lorem elit sit irure aliqua cillum Lorem duis. Officia ad aute incididunt est occaecat sunt ut ad consequat exercitation est minim aliquip dolore. Voluptate culpa veniam tempor nulla ad aliqua ex est proident eu ea minim. Aute fugiat amet et consectetur.",
    },
    {
      name: "Regie Samuel",
      relationship: "Friend",
      image: "https://i.imgur.com/QhyCgIQ.png",
      statement:
        "Laborum ut ipsum ex anim. Exercitation consectetur adipisicing occaecat minim in officia ipsum fugiat. Qui mollit est exercitation reprehenderit amet.",
    },
    {
      name: "Bernhard Samuel",
      relationship: "Friend",
      image: "https://i.imgur.com/QhyCgIQ.png",
      statement:
        "Laborum ut ipsum ex anim. Exercitation consectetur adipisicing occaecat minim in officia ipsum fugiat. Qui mollit est exercitation reprehenderit amet.",
    },
  ];

  return (
    <main>
      <div className="MainContent">
        <PageTitle title="Testimonials" />

        <div className={styles.AllTestimonials}>
          {testimonialsDb.map((testimonial, idx) => (
            <div key={idx} className={styles.EachTestimonial}>
              <h5 className={styles.author}>{testimonial.name}</h5>
              <div className={styles.Info}>
                <div className={styles.ImageOutDiv}>
                  <div className={styles.ImageInDiv}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>

                <div className={styles.InfoDiv}>
                  <h5>{testimonial.relationship}</h5>
                  <p>{testimonial.statement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
