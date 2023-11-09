import Link from "next/link";
import Image from "next/image"
import Logo from "../static/Logo.png"

import "./Navbar.scss"

const Navbar = () => {
    return ( 
        <nav>
            <div className="Logo">
            <Link href="/">
                <Image 
                    className="Logo"
                    src={Logo}
                    alt="Logo"
                />
                </Link>
            </div>

            <ul>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/portfolio">PORTFOLIO</Link></li>
                <li><Link href="/resume">RESUME</Link></li>
                <li><Link href="/art">ART</Link></li>
                <li><Link href="/music">MUSIC</Link></li>
                <li><Link href="/diy">DIY</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;