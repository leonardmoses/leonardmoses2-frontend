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
                <li><Link href="/me">Me</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/art">Art</Link></li>
                <li><Link href="/music">Music</Link></li>
                <li><Link href="/diy">Diy</Link></li>
            </ul>
            <div className={styles.NavBottomBorder}></div>
        </main>
     );
}
 
export default Navbar;