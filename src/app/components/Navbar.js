import Link from "next/link";
import Image from "next/image"
import Logo from "../static/Logo.png"

import "./Navbar.scss"

const Navbar = () => {
    return ( 
        <nav>
            <div className="Logo">
                <Image 
                className="Logo"
                src={Logo}
                alt="Logo"
                />
            </div>

            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;