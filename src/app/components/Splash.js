import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import styles from "./Splash.module.scss";

const Splash = () => {
  const [button1, setButton1] = useState("");
  const [color, setColor] = useState("");

  const buttonvariants = {
    hover: {
      scale: 1.2,
      transition: { delay: 0, duration: 0.2 },
    },
  };

  const isDesktop = useMediaQuery({ minWidth: 390 });
  const iphone5SE = useMediaQuery({ minWidth: 320 });

  return (

      <div className={styles.body}>
        <header className={styles.header}>
          <div className={styles.directions}>
            <h3>Click a Colored Dot</h3>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.title_container}>
            <motion.h2
              // initial={{opacity:0}}
              // whileHover={{
              //   opacity:1,
              //   delay: 3
              // }}
              style={{ background: color }}>
              {button1}
            </motion.h2>
          </div>

          <motion.div className={styles.dot_container}>
            <motion.div
              className={styles.dot0_container}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}>
              <motion.span
                className={styles.dot0}
                id={styles.dot0}
                initial={{}}
                animate={{}}
                transition={{}}></motion.span>
            </motion.div>

            {isDesktop ? (
              <motion.div
                className={styles.dot1_container}
                initial={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/me">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot1}
                    initial={{ x: 0, y: -1000, opacity:0 }} //will cause transform: none. and override css/scss file
                    animate={{ x: 0, y: -190, opacity:1 }} //will cause transform: none. and override css/scss file
                    size={20}
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Me</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className={styles.dot1_container}
                initial={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/me">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot1}
                    initial={{ x: 0, y: -600, opacity: 0 }} //will cause transform: none. and override css/scss file
                    animate={{ x: 0, y: -145, opacity: 1 }} //will cause transform: none. and override css/scss file
                    size={20}
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Me</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            )}

            {isDesktop ? (
              <motion.div
                className={styles.dot2_container}
                initial={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/portfolio">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot2}
                    initial={{ x: -1100, y: 800, opacity: 0 }}
                    animate={{ x: -165, y: 100, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Portfolio</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className={styles.dot2_container}
                initial={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/portfolio">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot2}
                    initial={{ x: -700, y: 600, opacity: 0 }}
                    animate={{ x: -125, y: 80, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Portfolio</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            )}

            {isDesktop ? (
              <motion.div
                className={styles.dot3_container}
                initial={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/resume">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot3}
                    initial={{ x: 1100, y: 800, opacity: 0 }}
                    animate={{ x: 165, y: 100, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Resume</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className={styles.dot3_container}
                initial={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/resume">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot3}
                    initial={{ x: 700, y: 600, opacity: 0 }}
                    animate={{ x: 120, y: 80, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Resume</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            )}
{/* 
            {isDesktop ? (
              <motion.div
                className={styles.dot4_container}
                initial={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/art">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot4}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: -165, y: -100, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Art</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className={styles.dot4_container}
                initial={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/music">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot4}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: -125, y: -80, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Art</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            )}

            {isDesktop ? (
              <motion.div
                className={styles.dot5_container}
                initial={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/music">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot5}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 165, y: -100, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Music</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className={styles.dot5_container}
                initial={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/art">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot5}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 120, y: -80, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>Music</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            )}

            {isDesktop ? (
              <motion.div
                className={styles.dot6_container}
                initial={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 150 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/diy">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot6}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 190, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>DIY</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className={styles.dot6_container}
                initial={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                animate={{ x: -18, y: 115 }} //default is x:-18 y: 150. To compensate for transition: none;
                transition={{ delay: 0 }}>
                <Link href="/diy">
                  <motion.span
                    className={styles.dot}
                    id={styles.dot6}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: 145, opacity: 1 }} //will cause transform: none. and override css/scss file
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 100,
                      // mass: 0.7 ,
                      // damping: 20
                    }}
                    variants={buttonvariants}
                    whileHover="hover"
                    type="button"
                    onHoverStart={() => setButton1(<h2>DIY</h2>)}
                    onHoverEnd={() => setButton1("")}></motion.span>
                </Link>
              </motion.div>
            )}
            */}
          </motion.div>

          <div className={styles.name_container}>
            <motion.div
              className={styles.name_text}
              initial={{ opacity: 0, x: 0, y: 25 }}
              animate={{ opacity: [0, 0, 0, 0.5, 1], x: 0, y: 0 }}
              transition={{
                time: [0, 0.25, 0.5, 0.75, 1],
                delay: 0,
                duration: 3,
                type: "tween",
                ease: "easeInOut",
              }}>
              <h1>Leonard Moses</h1>
            </motion.div>
            <div className={styles.fadeEffect}></div>
          </div>
    
        </main>
      </div>

  );
};

export default Splash;
