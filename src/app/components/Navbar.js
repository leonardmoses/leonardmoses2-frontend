import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/resume">Resume</Link></li>
          </ul>
        </nav>
     );
}
 
export default Navbar;