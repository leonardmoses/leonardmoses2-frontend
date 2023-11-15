import Link from "next/link";
import styles from "./Footer.module.scss"

const Footer = () => {
    return ( 
        <main>
            <div className={styles.FooterMain}>
                <hr/>
                <div className={styles.Links}>
                    <ul className={styles.SocialLinks}>
                        <li><Link href="https://www.linkedin.com/in/leonard-moses/" target="#">LinkedIn</Link></li>
                        <li><Link href="https://github.com/leonardmoses" target="#2">GitHub</Link></li>
                    </ul>
                </div>
            </div>
        </main>
     );
}
 
export default Footer;