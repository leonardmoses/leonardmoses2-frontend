import {motion} from "framer-motion"
import Link from "next/link";
import { useState } from "react";

import styles from "./Splash.module.scss"

const Splash = () => {
    const [ button1 , setButton1 ] = useState("") ;
    const [ color , setColor ] = useState("") ;
  
    const buttonvariants = {
      hover: {
        scale: 1.2,
        transition: { delay: 0 , duration: 0.2},
      },
    }
  
    return (
      <div className={styles.container}>

        <div className={styles.body}>
  
        <header className={styles.header}>
        
          <div className={styles.directions}>
            <h3>Click a Colored Dot</h3>
          </div>
  
  
        </header>
  
        <main className={styles.main}>
  
          <div className={styles.title_container}>
  
            <motion.h1
            // initial={{opacity:0}}
            // whileHover={{
            //   opacity:1,
            //   delay: 3
            // }}
            style={{background:color}}
            >{button1}</motion.h1> 
          </div>
  
          <motion.div className={styles.dot_container}>
  
  
  
            <div className={styles.dot1_container}>
              
              <Link href="/about">
                <motion.span className={styles.dot} id={styles.dot1}
                initial={{x:0 , y:-800 }}
                animate={{x:0 , y: 0 }}
                transition={{
                  delay: 1 , 
                  type: 'spring' , 
                  stiffness: 100 , 
                  // mass: 0.7 , 
                  // damping: 20
  
                }}
                variants={buttonvariants}
                whileHover='hover'
                drag="x"
                dragConstraints={{ left:-10 , right: 10 , down: -10 , up: 10 }}
                dragSnapToOrigin="true"
                type="button"
                onHoverStart={ () => {setButton1(<h2>About Me</h2>) ; setColor()}}
                onHoverEnd={ () => setButton1("")}
  
                ></motion.span>
              </Link>
            </div>
  
            <motion.div className={styles.dot0_container}
            initial={{x: 0 , y: 0 , opacity: 0 }}
            animate={{x: 0 , y: 0 , opacity: 1 }}
            transition={{ duration: 1.5 , delay: 0.5 , ease: 'easeOut' }}
            >
              <motion.span className={styles.dot0} id={styles.dot0}
              initial={{x: 0 , y: 0 , }}
              animate={{x: 0 , y: 0}}
              transition={{}}
              ></motion.span>
            </motion.div>
  
            <motion.div className={styles.dot2_container}
              initial={{x:-155, y:-80}}
              animate={{x:-155, y:-80}}
              transition={{delay:0}}
              >
              <Link href='/portfolio'>
                <motion.span className={styles.dot} id={styles.dot2}
                initial={{x:-800 , y:800}}
                animate={{x:0 , y:0}}
                transition={{
                  delay: 1 , 
                  type: 'spring' , 
                  stiffness: 100 , 
                  // mass: 0.7 , 
                  // damping: 20
                }}
                variants={buttonvariants}
                whileHover="hover"
                type="button"
                onHoverStart={ () => setButton1(<h2>Portfolio</h2>)}
                onHoverEnd={ () => setButton1("")}
                ></motion.span>
              </Link>
            </motion.div>
  
            <motion.div className={styles.dot3_container}
              initial={{x:155,y:-118}}
              animate={{x:155,y:-118 /*y: -38 is default*/}}
              transition={{delay:0}}
            > 
              <Link href='/resume'>
                <motion.span className={styles.dot} id={styles.dot3}
                initial={{x: 800 , y:800}}
                animate={{x:0 , y:0}}
                transition={{
                  delay: 1 , 
                  type: 'spring' , 
                  stiffness: 100 , 
                  // mass: 0.7 , 
                  // damping: 20
                }}
                variants={buttonvariants}
                whileHover="hover"
                type="button"
                onHoverStart={ () => setButton1(<h2>Resume</h2>)}
                onHoverEnd={ () => setButton1("")}
  
                ></motion.span>
              </Link>
            </motion.div>
  
          </motion.div>
  
          <div className={styles.name_container}>
            <motion.div className={styles.name_text}
              initial={{opacity: 0 , x: 0 , y: 25 }}
              animate={{opacity: [0,0,0, 0.5, 1] , x: 0 , y: 0 }}
              transition={{ time:[0, .25 , 0.5 , 0.75 , 1] ,delay: 0 , duration: 3 , type: 'tween' , ease:'easeInOut'}}
            ><h1>Leonard Moses</h1></motion.div>
            <div className={styles.fadeEffect}></div>
            
          </div>
  
          {/*
          <Link href='/Portfolio'><motion.button
            whileHover={{ 
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)"
            
            }}
          >Portfolio</motion.button></Link>
          */}
          
        </main>
        </div>
      </div>
    )
}
 
export default Splash;