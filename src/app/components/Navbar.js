import Link from "next/link";
import Image from "next/image"
import Logo from "../static/Logo.png"

import "./Navbar.scss"

const Navbar = () => {
    return ( 
        <nav>
            <div className="LogoDiv">
                <Link href="/">
                    <Image 
                        className="Logo"
                        src={Logo}
                        alt="Logo"
                    />
                </Link>
            </div>
            
            <ul className="NavLinks">
                <li><Link href="/me">Me</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/art">Art</Link></li>
                <li><Link href="/music">Music</Link></li>
                <li><Link href="/diy">Diy</Link></li>
            </ul>
            <div className="NavBottomBorder"></div>
        </nav>
     );
}
 
export default Navbar;