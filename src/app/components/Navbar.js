 import Link from "next/link";
import Image from "next/image"
import Logo from "../static/Logo.png"

import styles from "./Navbar.module.scss"

const Navbar = () => {
    return ( 
        <main>
            <div className={styles.LogoDiv}>
                <Link href="/">
                    <Image 
                        className={styles.Logo}
                        src={Logo}
                        alt="Logo"
                    />
                </Link>
            </div>
            
            <ul className={styles.NavLinks}>
                <li ><Link className={styles.LinkMe} href="/me">Me</Link></li>
                <li ><Link className={styles.LinkPortfolio} href="/portfolio">Portfolio</Link></li>
                <li ><Link className={styles.LinkResume} href="/resume">Resume</Link></li>
                <li ><Link className={styles.LinkArt} href="/art">Art</Link></li>
                <li ><Link className={styles.LinkMusic} href="/music">Music</Link></li>
                <li ><Link className={styles.LinkDiy} href="/diy">Diy</Link></li>
            </ul>
            <div className={styles.NavBottomBorder}></div>
        </main>
     );
}
 
export default Navbar;